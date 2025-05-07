from flask import Flask, request, jsonify
from flask_cors import CORS
import nltk
import json
import random

app = Flask(__name__)
CORS(app)

nltk.download('punkt')

with open("intents.json") as file:
    intents = json.load(file)

def tokenize(sentence):
    return nltk.word_tokenize(sentence.lower())

def match_intent(msg, intents):
    msg_tokens = tokenize(msg)
    for intent in intents["intents"]:
        for pattern in intent["patterns"]:
            pattern_tokens = tokenize(pattern)
            if any(word in msg_tokens for word in pattern_tokens):
                return random.choice(intent["responses"])
    return "Sorry, I do not understand."

@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    message = data.get("message", "")
    response = match_intent(message, intents)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True)
