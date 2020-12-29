from flask import Flask,request,jsonify
from flask_cors import CORS
from ACLAction import execCommandAction

app = Flask(__name__)
CORS(app, resources={r"/*"})

# 交互接口
@app.route('/exec_commands', methods=["POST"])
def exec_commands():
    params = request.get_json(silent=True)
    # print(params)
    routerName = params['host']
    commandList = params['commands']
    try:
        code = execCommandAction(routerName, commandList)
        return jsonify({'result': '访问控制设置完成！', 'code': code})
    except:
        return jsonify({'result': '程序出现异常，请查看后台运行情况', 'code': ''})

# 设置访问控制接口
# @app.route('/api/setACL', methods=["POST"])
# def setACL():
#     # params = request.get_json(silent=True)
#     # print(params)
#     # param = params['param']
#     try:
#         setACLAction()
#     except:
#         return jsonify({'result': '程序出现异常，请查看后台运行情况'})
#     return jsonify({'result': '访问控制设置完成！'})

# 解除访问控制接口
# @app.route('/api/removeACL', methods=["POST"])
# def removeACL():
#     # params = request.get_json(silent=True)
#     # print(params)
#     # param = params['param']
#     try:
#         removeACLAction()
#     except:
#         return jsonify({'result': '程序出现异常，请查看后台运行情况'})
#     return jsonify({'result': '解除访问控制完成！'})
#
# #测试连通性
# @app.route('/api/ping', methods=["POST"])
# def ping():
#     # params = request.get_json(silent=True)
#     # print(params)
#     # param = params['param']
#     try:
#         result = pingAction()
#     except:
#         return jsonify({'result': '程序出现异常，请查看后台运行情况'})
#     return jsonify({'result': result})
#
# #显示路由表
# @app.route('/api/show', methods=["POST"])
# def show():
#     # params = request.get_json(silent=True)
#     # print(params)
#     # param = params['param']
#     try:
#         result = showAction()
#     except:
#         return jsonify({'result': '程序出现异常，请查看后台运行情况'})
#     return jsonify({'result': result})

if __name__ == '__main__':
    app.run()
