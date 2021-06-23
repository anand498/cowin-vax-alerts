from fastapi import status
from fastapi.responses import JSONResponse
from fastapi.templating import Jinja2Templates
import pandas as pd
import json,ssl,os,pytz
from app.config import app_config
from pymongo import MongoClient 
from datetime import datetime
from time import sleep
from pytz import timezone

def timetz(*args):
    return datetime.now(tz).timetuple()

tz = timezone('Asia/Kolkata') 
df_districts=pd.read_csv("app/static/DistrictListwithstates.csv")
client = MongoClient(app_config.DB_URL,ssl_cert_reqs=ssl.CERT_NONE)


def jsonresponse(reasonCode,status):
    json={
        "reasonCode":reasonCode,
        "status":status
    }
    return json


def subscribeuser(userdetails):
    name=userdetails.name
    email=userdetails.email
    district=userdetails.district
    state=userdetails.state
    agegroup=userdetails.agegroup
    db=app_config.DB
    collectionname=app_config.COLLECTION_NAME
    districtid=df_districts.loc[df_districts['District_Name'] == district, 'District_ID'].iloc[0]
    if name.isspace() == True or email.isspace()==True  or agegroup =="" or state =="" or name is None or email is None or agegroup is None or state is None :
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST,content=jsonresponse('400','Error - Payload in Invalid'))
    record={
        "name": str(name),
        "email": str(email),
        "state_name":str(state),
        "district_name":str(district),
        "district_id":str(districtid),
        "age":str(agegroup),
        "createdDateTime":str(datetime.now(tz).replace(microsecond=0))
    }
    db = client[db]
    coll = db[collectionname]
    myquery = {"email":email,"name":name,"district_name":district,"age":agegroup}
    if coll.find(myquery).count() > 0:
        return JSONResponse(status_code=status.HTTP_403_FORBIDDEN,content=jsonresponse('403','Entry against value already exists'))
    
    result = coll.insert_one(record)
    collection_name_bkp=app_config.COLLECTION_NAME_BKP
    coll2=db[collection_name_bkp]
    result2=coll2.insert_one(record)
    ack = result.acknowledged
    record={
        "name": str(name),
        "email": str(email),
        "state_name":str(state),
        "district_name":str(district),
        "district_id":str(districtid),
        "age":str(agegroup),
        'confirmation_type':'register'
    }
    invoke_response = app_config.lambda_client.invoke(FunctionName='Mail-Sender',
                                    InvocationType='Event',
                                    Payload=json.dumps(record))
    if (ack==True):
        return JSONResponse(status_code=status.HTTP_201_CREATED,content=jsonresponse('201','User Subscribed'))




def deleteuser(userdetails):
    email=userdetails.email
    db=app_config.DB
    collectionname=app_config.COLLECTION_NAME
    db = client[db]
    coll = db[collectionname]
    myquery = {"email":email}
    if coll.find(myquery).count() > 0:
        for x in coll.find(myquery):
            name=x['name']
            break
        coll.delete_many(myquery)

    else:
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST,content=jsonresponse('400','User Does not Exist'))
    record={
        'email': str(email),
        'name': str(name),
        'confirmation_type':'delete'
    }
    invoke_response = app_config.lambda_client.invoke(FunctionName='Mail-Sender',
                                    InvocationType='Event',
                                    Payload=json.dumps(record))
    return JSONResponse(status_code=status.HTTP_200_OK,content=jsonresponse('200','User Deleted'))




