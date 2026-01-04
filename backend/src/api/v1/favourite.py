from fastapi import APIRouter

router = APIRouter()


@router.post("/favourite/plant")
async def favourite_plant():
    pass

@router.post("/unfavourite/plant")
async def unfavourite_plant():
    pass