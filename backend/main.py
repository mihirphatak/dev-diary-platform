from fastapi import FastAPI
from database import engine, Base
from api.routes_projects import router as project_router

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(project_router)