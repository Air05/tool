const net = require('net');
const PORT = 3307;
var client = new net.Socket();

client.connect(PORT, '127.0.0.1', function() {
    //第一步向服务器发送获取公钥请求
 	client.write("testdata");
});

client.on('data', function(data) {
      console.log(data.toString());
      if(data.toString() === "resive"){
         client.end();
      }
});

client.on('close', function() {
	console.log('Connection closed');
});

client.on('error', (error) => {
    console.log(error)
});
