from pydanic import BaseModel,EmailStr
from typing import Optional
from datetime import datetime

class CarBase(BaseModel):
    brand:str
    model:str
    year:str
    color:str
    price:str
    vin:str
    mileage:str
    fuel_type:str
    transmission:str

class CarCreate(CarBase):
    pass

class CarResponse(CarBase):
    id:int
    is_avaible:bool
    arrival_date: datetime

class Config:
    from_attributes = True

class PurchaseCreate:
    car_id:int 
    buyer_name:bool 
    buyer_email:EmailStr

class PurchaseResponse(BaseModel):
    id:int 
    car_id:int 
    brand:str 
    model:str 
    price:str 
    buyer_name:str 
    buyer_email:str 
    purchase_date: datetime 

class Config:
    from_attributes = True