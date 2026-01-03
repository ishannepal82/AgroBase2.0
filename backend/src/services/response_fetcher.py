import requests
from core.config import config

class ResponseFetcherService:
    API_TOKEN = config.API_TOKEN
    BASE_URL = "https://trefle.io/api/v1/plants"

    def fetch_plants(self, page: int = 1) -> list:
        try:
            res = requests.get(
                f"{self.BASE_URL}?token={self.API_TOKEN}&page={page}"
            )
            res.raise_for_status()
            data = res.json()
            return data.get('data', [])  # return list of plants
        except requests.exceptions.RequestException as e:
            raise RuntimeError("Failed to fetch plants data") from e

    def fetch_response(self, limit: int = 10, page: int = 1) -> list:
        try:
            plants = []
            current_page = page
            
            while len(plants) < limit:
                fetched = self.fetch_plants(current_page)
                if not fetched:  
                    break
                plants.extend(fetched)
                current_page += 1
            
            return plants[:limit]
        except Exception as e:
            raise RuntimeError("Failed to fetch responses") from e

