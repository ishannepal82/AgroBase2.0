from fastapi import APIRouter, Depends, Request
from services.ai_service import AIService
from helpers.get_openrouter import get_openrouter_client
from helpers.prompt_sanitizer import prompt_sanitizer
from typing import Optional
from fastapi.exceptions import HTTPException
from schemas.PlantPromptRequest import Plant


router = APIRouter()

@router.post("/plant/info")
@prompt_sanitizer
async def get_plant_info(
    plant: Optional[Plant] = None,
    client=Depends(get_openrouter_client)
):
    if plant is None:
        raise HTTPException(status_code=400, detail="Prompt is required")
    service = AIService(client)
    reply = service.get_plant_info(prompt=plant)
    return {"response": reply}
