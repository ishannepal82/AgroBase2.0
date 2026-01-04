from fastapi import APIRouter, HTTPException, Query, Request, Depends
from services.response_fetcher import ResponseFetcherService

router = APIRouter()

@router.get("/plants/{page}")
def fetch_plants(
    page: int,
    limit: int = Query(10, ge=1, le=24, description="Number of items to fetch")
):
    try:
        service = ResponseFetcherService()
        response = service.fetch_response(limit=limit, page=int(page))
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error") from e
    
# search_plants_by_name


