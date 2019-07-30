const crypto = require("crypto");
let text = "hello world"
const fs = require("fs");

function encode(text,key){
	var secret = key || "12345678";
	var cipher = crypto.createCipher('aes-256-cfb',secret);
	var crypted =cipher.update(text,'utf8','hex');
	crypted+=cipher.final('hex');
	return crypted;
}


//将加密文件写入磁盘
fs.readFile("./example.txt", "utf-8", function(error, data) {
  // console.log(error);  //如果err为null就说明读取成功了,没有出错
  // console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出
	if (error) {return console.log("读取文件失败,内容是" + error.message)};
	console.log(data)
	let encryptionCode = encode(data,"12345678")

	fs.writeFile('./encryptionCode.txt', encryptionCode , function (error) {
	  if (error) {
	    console.log('写入失败')
	  } else {
	    console.log('写入成功了')
	  }
	})

  //  用error来判断文件是否读取成功

  console.log("读取文件成功,内容是" + data);
});
