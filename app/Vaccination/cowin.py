from fastapi import status
from fastapi.responses import JSONResponse
from fastapi.templating import Jinja2Templates
from app.config.dbconfig import DB,client,COLLECTION_NAME


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
    record={
        "name": str(name),
        "email": str(email),
        "district_name":str(district),
        "state_name":str(state),
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








