# routes/search.py
from fastapi import APIRouter, Depends, HTTPException
from services.search import SearchService
from helpers.get_db import get_db
from core.logger import logger

router = APIRouter(prefix="/search", tags=["Search"])

@router.get("/plants")
def search_plants(
    q: str | None = None,
    db=Depends(get_db),
):
    try:
        search_service = SearchService(db)
        results = search_service.search(q)
    except ValueError as e:
        logger.warning(f"Search failed: {e}, Invalid query parameter.")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.warning(f"Search failed: {e}, Unexpected error during search.")
        raise HTTPException(status_code=500, detail="Internal server error")
    return {"results": results}