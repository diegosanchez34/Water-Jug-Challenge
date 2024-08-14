from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    input1 = data.get('input1')
    input2 = data.get('input2')
    input3 = data.get('input3')
    if input1 is not None and input2 is not None and input3 is not None:
        resultado = input1 + input2 + input3
        return jsonify({'resultado': resultado})
    return jsonify({'error': 'Invalid input'}), 400

if __name__ == '__main__':
    app.run(debug=True)