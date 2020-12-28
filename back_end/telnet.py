from telnetlib import Telnet
import time

class TelnetTool:
    def __init__(self, host: str, username: str, password: str, enablePassword: str):
        # 接收实例化的变量
        self.login_dict = {
            'host': host,
            'username': username,
            'password': password,
            'enablePassword': enablePassword
        }

    def telnet_on(self, commandList: list):
        # 实例化一个连接
        tn = Telnet(self.login_dict['host'], port=23, timeout=10)
        # 设置debuglevel
        # tn.set_debuglevel(2)

        # 输入密码
        tn.read_until(b"Password:")
        tn.write(self.login_dict['password'].encode('ascii') + b'\n')

        # 输入enable密码
        tn.write(b"enable\n")
        tn.read_until(b"Password:")
        tn.write(self.login_dict['enablePassword'].encode('ascii') + b'\n')

        # 完成登录
        # 提交命令
        command_result = ''
        for c in commandList:
            tn.write(c.encode('ascii') + b'\n')
            time.sleep(1)
            # print('write one--------------------')
            # 获取返回结果
            command_result = tn.read_very_eager().decode("ascii")

        # 打印
        print(command_result)
        tn.close()
        return command_result


if __name__ == '__main__':
    telnetA = TelnetTool('192.168.3.1', 'Router', 'CISCO', 'CISCO')
    commandList = [
        'ping 192.168.2.2',
        'ping 172.16.0.1',
        'ping 192.168.3.2'
    ]
    telnetA.telnet_on(commandList)