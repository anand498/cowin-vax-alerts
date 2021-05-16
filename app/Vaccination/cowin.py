from fastapi import status
from fastapi.responses import JSONResponse
from fastapi.templating import Jinja2Templates
from app.config.dbconfig import DB,client,COLLECTION_NAME
import pandas as pd
df_districts=pd.read_csv("app/static/DistrictListwithstates.csv")
def jsonresponse(reasonCode,status,reasonText):
    json={
        "reasonCode":reasonCode,
        "status":status,
        "reasonText":reasonText
    }
    return json

def subscribeuser(userdetails):
    name=userdetails.name
    email=userdetails.email
    district=userdetails.district
    state=userdetails.state
    agegroup=userdetails.agegroup
    districtid=df_districts.loc[df_districts['District_Name'] == district, 'District_ID'].iloc[0]
    if name=="" or email =="" or name is None or email is None:
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST,content=jsonresponse('400','Error','Payload in Invalid'))
    record={
        "name": str(name),
        "email": str(email),
        "state_name":str(state),
        "district_name":str(district),
        "district_id":str(districtid),
        "age":str(agegroup)
    }
    user_collection = client[DB][COLLECTION_NAME]
    result = user_collection.insert_one(record)
    ack = result.acknowledged
    if (ack==True):
        return JSONResponse(status_code=status.HTTP_200_OK,content=jsonresponse('200','User Subscribed','User has been registered'))

def deleteuser(userdetails):
    email=userdetails.email
    records = client[DB][COLLECTION_NAME]
    myquery = {'email':email}
    records.delete_many(myquery)
    return JSONResponse(status_code=status.HTTP_200_OK,content=jsonresponse('200','Records Deleted'))









