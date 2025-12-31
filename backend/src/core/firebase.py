import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from core.config import config

def initialize_firebase():
    if not firebase_admin._apps:
        cred = credentials.Certificate(config.FIREBASE_CREDENTIALS_PATH)
        firebase_admin.initialize_app(cred)
    return firestore.client()

