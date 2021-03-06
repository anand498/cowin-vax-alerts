from fastapi import APIRouter,Depends, Request
from fastapi.responses import JSONResponse
from app.config import schemas
from app.Vaccination.cowin import *
from fastapi.templating import Jinja2Templates
route = APIRouter()

templates = Jinja2Templates(directory="app/templates")



@route.get("/")
async def homepage(request:Request):
    return templates.TemplateResponse("home.html", {
        "request": request})

@route.post("/vax-alerts")
async def subscribeMail(request:Request,userdata:schemas.addUser):
    response=subscribeuser(userdata)
    return response

@route.delete("/unsubscribeMail")
async def deleteRecord(request:Request,userdata:schemas.deleteUser):
    response=deleteuser(userdata)
    return response











