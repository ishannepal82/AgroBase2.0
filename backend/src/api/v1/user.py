from fastapi import APIRouter, Depends, HTTPException
# services
from services.auth.login import LoginService
from services.auth.register import RegisterService
# extras
from pydantic import BaseModel
import logging
# helpers
from helpers.get_db import get_db



router = APIRouter()
logger = logging.getLogger(__name__)

class LoginRequest(BaseModel):
    username: str
    password: str

class RegisterRequest(BaseModel):
    username: str
    password: str
    email: str

@router.post("/login")
def login(req: LoginRequest, db=Depends(get_db)):
    username = req.username
    password = req.password
    login_service = LoginService(db)
    try:
        resp = login_service.login(username, password)
        return resp
    except ValueError as e:
        logger.warning(f"Login failed for user {username}: {e}")
        raise HTTPException(status_code=401, detail="Invalid username or password")
    except Exception as e:
        logger.error(f"Unexpected error during login: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="Internal server error")

@router.post("/register")
def register(req: RegisterRequest, db=Depends(get_db)):
    username = req.username
    password = req.password
    email = req.email

    register_service = RegisterService(db)
    try:
        resp = register_service.register(username, password, email)
        return resp
    except ValueError as e:
        logger.warning(f"Registration failed for user {username}: {e}")
        raise HTTPException(status_code=401, detail="Invalid username or password")
    except Exception as e:
        logger.error(f"Unexpected error during login: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="Internal server error")