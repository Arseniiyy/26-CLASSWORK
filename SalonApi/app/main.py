from fastapi import FastAPI
from .database import create_tables
from .routers import cars, purchases

create_tables()

app = FastAPI(
    title="Car Dealership API",
    description="API для управления автопарком и продажей автомобилей",
    version="1.0.0"
)


app.include_router(cars.router)
app.include_router(purchases.router)

@app.get("/")
def read_root():
    return {"message": "Добро пожаловать в API автопарка!"}

@app.get("/health")
def health_check():
    return {"status": "healthy"}