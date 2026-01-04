from openrouter import OpenRouter
from core.config import config

OPENROUTER_API_KEY = config.OPENROUTER_API_KEY

openrouter_client = OpenRouter(
    api_key=OPENROUTER_API_KEY,
)
