from fastapi import status
from fastapi.responses import JSONResponse
from fastapi.templating import Jinja2Templates
import pandas as pd
from boto3.dynamodb.conditions import Key, Attr
import json,ssl,os,pytz
from app.config import app_config
import uuid
from datetime import datetime
from time import sleep
from pytz import timezone
import boto3


tz = timezone('Asia/Kolkata') 
df_districts=pd.read_csv("app/static/DistrictListwithstates.csv")


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
    districtid=df_districts.loc[df_districts['District_Name'] == district, 'District_ID'].iloc[0]
    if name.isspace() == True or email.isspace()==True  or agegroup =="" or state =="" or name is None or email is None or agegroup is None or state is None :
        return JSONResponse(status_code=statu,content=jsonresponse('400','Error - Payload in Invalid'))
    
    beneficiary_table = app_config.dynamodb_resource.Table('txn_beneficiary')
    response=beneficiary_table.scan(FilterExpression=Attr("email").eq(email) & Attr("name").eq(name) & Attr("district_id").eq(str(districtid)) & Attr("is_active").eq("1") &  Attr("age_group").eq(agegroup))
    if response['Count']==0:
        response = beneficiary_table.put_item(
                Item={
                        'user_id':str(uuid.uuid4()),
                        "name": str(name),
                        "email": str(email),
                        "state_name":str(state),
                        "district_name":str(district),
                        "district_id":str(districtid),
                        "age_group":str(agegroup),
                        "createdDateTime":str(datetime.now(tz).replace(microsecond=0)),
                        'is_active':"1"
                    }
                )
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
        return JSONResponse(status_code=status.HTTP_201_CREATED,content=jsonresponse('201','User Subscribed'))

    else:
        return JSONResponse(status_code=status.HTTP_403_FORBIDDEN,content=jsonresponse('403','User already exists with district registration'))

    


def deleteuser(userdetails):
    email=userdetails.email
    beneficiary_table = app_config.dynamodb_resource.Table('txn_beneficiary')
    response=beneficiary_table.scan(FilterExpression=Attr("email").eq(email) & Attr("is_active").eq("1"))
    if response['Count']==0:
        return JSONResponse(status_code=status.HTTP_400_BAD_REQUEST,content=jsonresponse('400','Records against Email do not Exist'))
    else:
        for item in response['Items']:
            item['is_active'] = '0'
            name=item['name']
            beneficiary_table.put_item(Item=item)
        record={
                'email': str(email),
                'name': str(name),
                'confirmation_type':'delete'
            }
        invoke_response = app_config.lambda_client.invoke(FunctionName='Mail-Sender',
                                        InvocationType='Event',
                                        Payload=json.dumps(record))
        return JSONResponse(status_code=status.HTTP_200_OK,content=jsonresponse('200','User Deleted'))



