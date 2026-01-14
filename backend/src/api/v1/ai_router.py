from fastapi import APIRouter, Depends, Request
from services.ai_service import AIService
from helpers.get_openrouter import get_openrouter_client
from fastapi.exceptions import HTTPException
from schemas.plant_schema import PlantRequest
from fastapi import Body


router = APIRouter()

@router.post("/plant/info")
async def get_plant_info(
    # 'embed=True' tells FastAPI to look for a key named "plant" or its alias "prompt"
    plant: PlantRequest = Body(..., alias="prompt"), 
    client=Depends(get_openrouter_client)
):
    try:
        if not plant.prompt:
            raise HTTPException(status_code=400, detail="Prompt is required")
        
        service = AIService(client)
        reply = service.get_plant_info(prompt=plant)
        
        return {"response": reply}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")
