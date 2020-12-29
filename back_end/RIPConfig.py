from telnet import TelnetTool

RouterHost = {
    'RTB': '192.168.3.1',
    'RTC': '192.168.3.2'
}

def step2():
    rtc = TelnetTool(RouterHost['RTC'], 'Router', 'CISCO', 'CISCO')
    commandList = [
        'config terminal',
        'router rip',
        'network 192.168.2.0',
        'network 172.16.0.0',
        'passive-interface f0/0'
    ]
    rtc.telnet_on(commandList)
    print('step2 finished -----------------------------------------------')

def step3AndStep4():
    rtb = TelnetTool(RouterHost['RTB'], 'Router', 'CISCO', 'CISCO')
    commandList = [
        'config terminal',
        'router rip',
        'network 192.168.2.0',
        'network 192.168.3.0',
        'network 192.168.254.0'
    ]
    rtb.telnet_on(commandList)
    print('step3,4 finished ----------------------------------------------')

def RTCRoute():
    rtc = TelnetTool(RouterHost['RTC'], 'Router', 'CISCO', 'CISCO')
    commandList = [
        'show ip route'
    ]
    print(rtc.telnet_on(commandList))

if __name__ == '__main__':
    step2()
    step3AndStep4()
    RTCRoute()