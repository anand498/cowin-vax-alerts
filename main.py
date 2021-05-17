from fastapi import FastAPI,Response
import uvicorn
from fastapi.staticfiles import StaticFiles
from app.config import app_config 
from app.route import route
from pathlib import Path
from fastapi.middleware.httpsredirect import HTTPSRedirectMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware

app=FastAPI()

app.mount(
    "/static",
    StaticFiles(directory= "app/static"),
    name="static",
)
app.add_middleware(HTTPSRedirectMiddleware)
app.add_middleware(
    TrustedHostMiddleware, allowed_hosts=["myvaccinetracker.in", "*.myvaccinetracker.in"]
)
app.include_router(route, tags=["Vaccine Tracker"])
