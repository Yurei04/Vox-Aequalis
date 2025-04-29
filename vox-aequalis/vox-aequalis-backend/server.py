from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)
classifier = pipeline("zero-shot-classification")
labels = ["Developer", "Designer", "Data Analyst"]

@app.route('/classify', methods=['POST'])
def classify():
    data = request.json
    resume = data.get('resume', '')
    result = classifier(resume, labels)
    return jsonify({"prediction": result['labels'][0]})

if __name__ == '__main__':
    app.run(port=5000)
