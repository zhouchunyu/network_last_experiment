from flask import Flask,request,jsonify
from flask_cors import CORS
from ACLAction import setACLAction, removeACLAction

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

# 设置访问控制接口
@app.route('/api/setACL', methods=["POST"])
def setACL():
    # params = request.get_json(silent=True)
    # print(params)
    # param = params['param']
    try:
        setACLAction()
    except:
        return jsonify({'result': '程序出现异常，请查看后台运行情况'})
    return jsonify({'result': '访问控制设置完成！'})

# 解除访问控制接口
@app.route('/api/removeACL', methods=["POST"])
def removeACL():
    # params = request.get_json(silent=True)
    # print(params)
    # param = params['param']
    try:
        removeACLAction()
    except:
        return jsonify({'result': '程序出现异常，请查看后台运行情况'})
    return jsonify({'result': '解除访问控制完成！'})


if __name__ == '__main__':
    app.run()
