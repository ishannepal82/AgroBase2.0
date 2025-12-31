import bcrypt


class RegisterService:
    def __init__(self, db):
        self.db = db

    def register(self, username: str, password: str, email: str):
        users_ref = self.db.collection('users')
        # Check if user already exists
        query = users_ref.where('username', '==', username).limit(1).stream()
        for doc  in query:
            raise ValueError("User already exists")
        hashed_password = self.hash_password(password)
        user_data = {
            'username': username,
            'email': email,
            'hashed_password': hashed_password
        }
        users_ref.add(user_data)
        return {"message": "User registered successfully"}
    @staticmethod   
    def hash_password(plain_password: str) -> str:
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(plain_password.encode('utf-8'), salt)
        return hashed.decode('utf-8')