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

    def telnet_on(self, command: str):
        # 实例化一个连接
        tn = Telnet(self.login_dict['host'], port=23, timeout=10)
        # 设置debuglevel
        tn.set_debuglevel(2)

        # print(123)
        # # 输入用户名
        # tn.read_until(b"login:")
        # tn.write(self.login_dict['username'].encode('ascii') + b'\n')

        # 输入密码
        tn.read_until(b"Password:")
        tn.write(self.login_dict['password'].encode('ascii') + b'\n')

        # 输入enable密码
        tn.write(b"enable\n")
        tn.read_until(b"Password:")
        tn.write(self.login_dict['enablePassword'].encode('ascii') + b'\n')

        # 完成登录

        # 提交命令
        tn.write(command.encode('ascii') + b'\n')
        # 暂停2s
        time.sleep(2)

        # 获取返回结果
        command_result = tn.read_very_eager().decode("ascii")
        # 打印
        print(command_result)

        '''
        # 定义一个集合，每一页的信息都追加到集合中
        result_list = []
        # 判断是否有--More--
        while (True):
            # 获取返回结果
            command_result = tn.read_very_eager().decode("ascii")
            # 追加到集合
            result_list.append(command_result)

            # 判断当前页是否是--More--结束
            if '--More--' in command_result.strip():
                tn.write(b" ")
                time.sleep(0.5)
            else:
                break;

        # 拼接
        result_str = "\n".join(result_list)
        print(result_str)'''


if __name__ == '__main__':
    telnetA = TelnetTool('172.16.0.1', 'Router', 'CISCO', 'CISCO')
    telnetB = TelnetTool('172.16.0.1', 'Router', 'CISCO', 'CISCO')
    telnetA.telnet_on('show int f0/1')
    telnetB.telnet_on('show int f0/1')