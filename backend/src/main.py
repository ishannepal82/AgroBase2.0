from fastapi import FastAPI
from core.config import config
from core.firebase import initialize_firebase as initalize_firebase
from contextlib import asynccontextmanager
from core.logger import logger
from api.v1.auth import router as auth_router
from api.v1.search import router as search_router
from api.v1.api_resposne_fetcher import router as response_fetcher_router
from api.v1.ai_router import router as ai_router
from fastapi.middleware.cors import CORSMiddleware

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
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api/v1/auth", tags=["users"])
app.include_router(search_router, prefix="/api/v1", tags=["search"])
app.include_router(response_fetcher_router, prefix="/api/v1", tags=["response_fetcher"])
app.include_router(ai_router, prefix="/api/v1/ai", tags=["ai"])





