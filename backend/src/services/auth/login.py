
db = [
    {"Ishan": "password123"},
    {"Alice": "alicepass"},
    {"Bob": "bobsecure"},
]

class LoginService:
    def __init__(self):
        # Initialize any required attributes here
        pass

    def login(self, username: str, password: str) -> dict:
        for user in db:
            if username in user and user[username] == password:
                return {"message": "Login successful", "user": username}
        raise ValueError("Invalid credentials")