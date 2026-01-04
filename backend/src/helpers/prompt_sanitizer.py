from schemas.PlantPromptRequest import Plant
from fastapi import Request
from functools import wraps

def prompt_sanitizer(func):
    @wraps(func)
    async def wrapper(*args, **kwargs):
        # Extract Request object
        request = None
        for arg in args:
            if isinstance(arg, Request):
                request = arg
                break
        if not request:
            request = kwargs.get("request")
        if not request:
            raise ValueError("Request parameter not found.")

        body = await request.json()
        prompt = body.get("prompt", "")
        if not prompt:
            raise ValueError("Prompt is required")

        plant = Plant.validate_dict(prompt)
        kwargs["plant"] = plant
        return await func(*args, **kwargs)
    return wrapper