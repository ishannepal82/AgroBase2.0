from fastapi import FastAPI
from core.config import config
from core.firebase import initialize_firebase as initalize_firebase
from contextlib import asynccontextmanager
from core.logger import logger
from api.v1.user import router as auth_router
from api.v1.search import router as search_router
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

app.include_router(auth_router, prefix="/api/v1", tags=["users"])
app.include_router(search_router, prefix="/api/v1", tags=["search"])





