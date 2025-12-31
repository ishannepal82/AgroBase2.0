from fastapi import FastAPI
from core.config import config
from core.firebase import initialize_firebase as initalize_firebase
from contextlib import asynccontextmanager
from core.logger import logger
import logging

@asynccontextmanager
async def lifespan(app: FastAPI):
    app.state.db = initalize_firebase()
    logger.info("Application startup: Initializing resources.")
    yield
    logger.info("Application shutdown: Cleaning up resources.")

app = FastAPI(
    title=config.API_TITLE,
    version=config.API_VERSION,
    lifespan=lifespan
)





