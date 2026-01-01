class SearchService:
    def __init__(self, db):
        self.db = db

    def search(self, query: str | None = None, limit: int = 20):
        ref = self.db.collection("plants")

        if query:
            ref = (
                ref.where("name", ">=", query)
                   .where("name", "<=", query + "\uf8ff")
                   .order_by("name")
            )

        return [doc.to_dict() for doc in ref.limit(limit).stream()]
