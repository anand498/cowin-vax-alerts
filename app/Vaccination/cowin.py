from fastapi import status
from fastapi.responses import JSONResponse
from fastapi.templating import Jinja2Templates
import pandas as pd
import json,smtplib 
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from jinja2 import Environment        
from app.config import app_config
from smtplib import SMTP
from pymongo import MongoClient
import ssl,os
from pretty_html_table import build_table
from icecream import ic
from datetime import datetime
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
        "createdDateTime":str(datetime.now().replace(microsecond=0))
    }
    db = client[db]
    coll = db[collectionname]
    myquery = {"email":email,"name":name,"district_name":district,"age":agegroup}
    if coll.find(myquery).count() > 0:
        return JSONResponse(status_code=status.HTTP_403_FORBIDDEN,content=jsonresponse('403','Entry against value already exists'))
    
    result = coll.insert_one(record)
    ack = result.acknowledged
    if (ack==True):
        return JSONResponse(status_code=status.HTTP_201_CREATED,content=jsonresponse('201','User Subscribed'))


def sendconfirmationmail(receiver,record):
    name=record['name']
    receiver=record['email']
    district_name=record['district_name']
    record={
        "Name": str(record['name']),
        "Email": str(record['email']),
        "State":str(record['state_name']),
        "District":str(record['district_name']),
        "Age Group":str(record['age'])
    }
    df = pd.json_normalize(record)
    data=build_table(df,'green_dark',font_family = 'Century Gothic',text_align = 'center')
    message = MIMEMultipart()
    message['Subject'] = 'My Vaccine Tracker Registration'
    message['From'] = 'myvaccinetracker@gmail.com'
    message['To'] = receiver
    VACCINE_TEMPLATE = """
            <!DOCTYPE html>
            <html>
            <h4>Hi, {{name}}!</h4>
            <p>Thanks for registering for Vaccination Alerts.</p>
            <br>
            <p>Here are the details captured by My Vaccine Tracker</p>
            {{table}}
            <br>
            <br>
            <p> To Book your Slot on Cowin, Click <a href="https://selfregistration.cowin.gov.in/">Here</a></p>
            <p>Thanks,</p>
            <p>My Vaccine Tracker Team</p>
            <center> Developed by:<a href="https://www.linkedin.com/in/anand498/" target="_blank">Anand Pandey</a></center>
            </html>
            """  
    message.attach(MIMEText(Environment().from_string(VACCINE_TEMPLATE).render(name=str(name),district_name=district_name,table=data), "html"))
    msg_body = message.as_string()
    
    server = SMTP(app_config.EMAIL_HOST, app_config.EMAIL_PORT)
    server.starttls()
    server.login(app_config.EMAIL_HOST_USER, app_config.EMAIL_HOST_PASSWORD)
    server.sendmail(message['From'], message['To'], msg_body)
    server.quit()

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
    sendconfirmationmaildelete(email,name)
    return JSONResponse(status_code=status.HTTP_200_OK,content=jsonresponse('200','User Deleted'))


def sendconfirmationmaildelete(receiver,name):
    message = MIMEMultipart()
    message['Subject'] = 'My Vaccine Tracker Unsubscription'
    message['From'] = 'myvaccinetracker@gmail.com'
    message['To'] = receiver
    VACCINE_TEMPLATE = """
            <!DOCTYPE html>
            <html>
            <h4>Hi, {{name}}!</h4>
            <p>You have been unsubscribed from receiving any further updates. </p>
            <p>If you would like to share the reason for your unsubscription, please click <a href="https://forms.gle/FeDmaN9opKGzZAf3A">Here</a>
            <br>
            <p>Thanks,</p>
            <p>My Vaccine Tracker Team</p>
            <center> Developed by:<a href="https://www.linkedin.com/in/anand498/" target="_blank">Anand Pandey</a></center>
            </html>
            """  
    message.attach(MIMEText(Environment().from_string(VACCINE_TEMPLATE).render(name=str(name)), "html"))
    msg_body = message.as_string()
    
    server = SMTP(app_config.EMAIL_HOST, app_config.EMAIL_PORT)
    server.starttls()
    server.login(app_config.EMAIL_HOST_USER, app_config.EMAIL_HOST_PASSWORD)
    server.sendmail(message['From'], message['To'], msg_body)
    server.quit()



