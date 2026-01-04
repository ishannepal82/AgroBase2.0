from dataclasses import dataclass, field
from typing import List, Dict, Optional

@dataclass
class Plant:
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
    links: Dict[str, str]
    bibliography: Optional[str] = None
    author: Optional[str] = None
    family_common_name: Optional[str] = None
    image_url: Optional[str] = None
    synonyms: Optional[List[str]] = field(default_factory=list)

    @classmethod
    def validate_dict(cls, data: dict):
        required_keys = {
            "id", "common_name", "slug", "scientific_name", "year",
            "status", "rank", "genus_id", "genus", "family", "links"
        }
        optional_keys = {
            "bibliography", "author", "family_common_name", "image_url", "synonyms"
        }
        all_keys = required_keys.union(optional_keys)

        # Check for unexpected keys
        extra_keys = set(data.keys()) - all_keys
        if extra_keys:
            raise ValueError(f"Unexpected keys found: {extra_keys}")

        # Check missing required keys
        missing_keys = required_keys - set(data.keys())
        if missing_keys:
            raise ValueError(f"Missing required keys: {missing_keys}")

        # Basic type checks (you can make this more strict if needed)
        # For example, check links keys
        expected_link_keys = {"self", "plant", "genus"}
        links = data["links"]
        if not isinstance(links, dict):
            raise TypeError("'links' must be a dictionary.")
        if set(links.keys()) != expected_link_keys:
            raise ValueError(f"'links' keys must be exactly {expected_link_keys}")
        if not all(isinstance(links[k], str) for k in expected_link_keys):
            raise TypeError("All 'links' values must be strings.")

        # Check synonyms list if present
        if "synonyms" in data:
            if not isinstance(data["synonyms"], list) or not all(isinstance(s, str) for s in data["synonyms"]):
                raise TypeError("'synonyms' must be a list of strings.")

        # (You can add more type checks here...)

        # If everything passes, create and return Plant instance
        return cls(**data)
