from typing import List, Optional
from pydantic import BaseModel, Field


class PlantLinks(BaseModel):
    self: str
    plant: str
    genus: str


class Plant(BaseModel):
    id: int
    common_name: str
    slug: str
    scientific_name: str
    year: int
    status: str
    rank: str
    genus_id: int
    genus: str
    family: str
    links: PlantLinks

    bibliography: Optional[str] = None
    author: Optional[str] = None
    family_common_name: Optional[str] = None
    image_url: Optional[str] = None
    synonyms: List[str] = Field(default_factory=list)


class PlantRequest(BaseModel):
    prompt: Plant
