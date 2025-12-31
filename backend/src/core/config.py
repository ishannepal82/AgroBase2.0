import dotenv
from pydantic_settings import BaseSettings
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[2]  # points to backend/


dotenv.load_dotenv()

class Config(BaseSettings):
    API_TITLE: str = "AgroBase API"
    API_VERSION: str = "1.0.0"
    FIREBASE_CREDENTIALS_PATH: str = str(BASE_DIR / "supersecret.json")

config = Config()

