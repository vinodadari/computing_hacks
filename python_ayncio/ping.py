import os
import asyncio


async def ping(ipaddr):
    print(os.popen(f'ping {ipaddr}').read())

# async def main(iplist:list):
#     return await asyncio.gather(*[ping(ip) for ip in iplist])

async def main(iplist:list):
    return await asyncio.gather(*[ping(ip) for ip in iplist])

iplist = ['10.10.32.51', '192.168.99.99', '127.0.0.1']

result = asyncio.run(main(iplist))

# print(result)
