from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import get_db
from models.project import Project
from schemas.project import ProjectCreate

router = APIRouter()


@router.post("/projects")
def create_project(project: ProjectCreate, db: Session = Depends(get_db)):
    new_project = Project(
        name=project.name,
        description=project.description,
        github_url=project.github_url
    )

    db.add(new_project)
    db.commit()
    db.refresh(new_project)

    return new_project


@router.get("/projects")
def get_projects(db: Session = Depends(get_db)):
    projects = db.query(Project).all()
    return projects