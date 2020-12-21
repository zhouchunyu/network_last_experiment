from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*"})

# 交互接口
@app.route('/api/test', methods=["POST"])
def testInterface():
    params = request.get_json(silent=True)
    # print(params)
    task = params['task']
    print(task)
    return jsonify({})


if __name__ == '__main__':
    app.run()
