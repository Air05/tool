//测试服务器是否能接收到信息
const fs = require('fs');
const net = require('net');
//-----------配置项-------------
const PORT = 3307;
//获取原始的密钥文件，包含公钥和私钥



//生成密钥对象
//读取密钥
//console.log(key);
//发送公钥给客户端
var server = net.createServer((socket) => {
		    socket.on('data', (data) => {
				console.log(data.toString());
				socket.write("resive");
		    });
			//关闭连接后
		    socket.on('end', () => {
		        //console.log('Client disconnected');
				socket.destroy()
		    });
				//错误处理
				socket.on('error', (error) => {
		        console.log(error)
    		});
    }).listen(PORT, () => {
    		console.log(`Socket server for text started on port ${PORT}`);
});
