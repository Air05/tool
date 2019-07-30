const crypto = require("crypto");
const fs = require("fs");
/**
 * 解密函数
 * @param text  需要解密的内容
 * @param key   秘钥
 * @returns {Query|*}
 */
function decode(text,key){
	var secret = key || "asdhjwheru*asd123&123";
	var decipher = crypto.createDecipher('aes-256-cfb',secret);
	var dec=decipher.update(text,'hex','utf8');
	dec+= decipher.final('utf8');//解密之后的值
	console.log(dec);
	return dec;
}

fs.readFile("./encryptionCode.txt", "utf-8", function(error, data) {
  // console.log(error);  //如果err为null就说明读取成功了,没有出错
  // console.log(data); // 如果不给第二个参数[读取的文件编码格式]就会以beffer格式输出
	let deencryptionCode = decode(data,"12345678")

	fs.writeFile('./deencryptionCode.txt', deencryptionCode , function (error) {
	  if (error) {
	    console.log('写入失败')
	  } else {
	    console.log('写入成功了')
	  }
	})

  //  用error来判断文件是否读取成功
  if (error) return console.log("读取文件失败,内容是" + error.message);
});
