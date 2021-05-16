from fastapi import FastAPI,Response
import uvicorn
from fastapi.staticfiles import StaticFiles
from app.config import app_config 
from app.route import route
from pathlib import Path


app=FastAPI()
app.mount(
    "/static",
    StaticFiles(directory= "app/static"),
    name="static",
)

app.include_router(route, tags=["Vaccine Tracker"])
