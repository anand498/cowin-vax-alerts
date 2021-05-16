from pydantic import BaseModel
from typing import Optional

class addUser(BaseModel):
    name: str
    email: str
    state: str
    district: str
    agegroup: str

class deleteUser(BaseModel):
    email: str
