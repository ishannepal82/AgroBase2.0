class AIService():
    def __init__(self, client):
        self.client = client

    def get_plant_info(self, prompt):
        try:
            response = self.client.chat.send(
                model="xiaomi/mimo-v2-flash:free",
                messages = [
                     {
                    "role": "system",
                    "content": (
                        "Purpose: To provide quick, clear, and powerful information about any plant’s benefits.\n"
                        "Instructions for the AI model:\n"
                        "You’re an expert botanist and medical researcher.\n"
                        "Give concise, impactful info on any plant using these sections:\n"
                        "- Names: Scientific and common names\n"
                        "- Description: Very brief botanical overview\n"
                        "- Medical Benefits: Key active compounds and traditional/scientific uses\n"
                        "- Nutritional Benefits: Main nutrients and antioxidants\n"
                        "- Other Benefits: Ecological, cosmetic, cultural, or industrial uses\n"
                        "- Precautions: Risks, toxicity, or contraindications\n"
                        "Make every section short and sharp—each point should be easy to read and hit hard with essential facts."
                    )
                },
                    {"role": "user", "content": "Provide the Info about this plant: {prompt}".format(prompt=prompt)}
                ]
            )
            print(response.choices[0].message.content)
            return response
        except Exception as e:
            print(repr(e))
            raise RuntimeError("Failed to get plant info")
        
        
