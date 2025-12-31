import bcrypt

class AuthenticationError(Exception):
    pass

class LoginService:
    def __init__(self, db):
        self.db = db  # Your database client or connection

    def login(self, username: str, password: str) -> dict:
        users_ref = self.db.collection('users')
        query = users_ref.where('username', '==', username).limit(1).stream()
        user = None
        for doc in query:
            user = doc.to_dict()
            break
        
        if not user:
            raise ValueError("Invalid credentials: user not found")
        
        # Here you should verify the password
        if not self.verify_password(password, user.get('hashed_password')):
            raise ValueError("Invalid credentials: wrong password")

        # Return whatever you want on successful login
        return {"message": "Login successful"}
    
    def verify_password(self, plain_password: str, hashed_password: str) -> bool:
        # bcrypt expects bytes, so encode strings
        return bcrypt.checkpw(plain_password.encode('utf-8'), hashed_password.encode('utf-8'))
    


