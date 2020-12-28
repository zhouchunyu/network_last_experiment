from telnet import TelnetTool

RouterHost = {
    'RTB': '192.168.3.1',
    'RTC': '192.168.3.2'
}

# 访问控制-死命令：无返回
def setACLAction():
    commandList = [
        'config terminal',
        'access-list 1 deny 192.168.254.0',
        'access-list 1 permit any',
        'router rip',
        'distribute-list 1 out'
    ]
    RTB = TelnetTool(RouterHost['RTB'], 'Router', 'CISCO', 'CISCO')
    RTB.telnet_on(commandList)


# 解除访问控制-死命令：无返回
def removeACLAction():
    commandList = [
        'config terminal',
        'no access-list 1 deny 192.168.254.0'
    ]
    RTB = TelnetTool(RouterHost['RTB'], 'Router', 'CISCO', 'CISCO')
    RTB.telnet_on(commandList)

#测试连通性
def pingAction():
    commandList = [
        'ping 192.168.2.2',
    ]
    RTB = TelnetTool(RouterHost['RTB'], 'Router', 'CISCO', 'CISCO')
    result = RTB.telnet_on(commandList)
    return result

#显示路由表
def showAction():
    commandList = [
        'clear ip route *',
        'show ip route'
    ]
    RTB = TelnetTool(RouterHost['RTC'], 'Router', 'CISCO', 'CISCO')
    result = RTB.telnet_on(commandList)
    return result