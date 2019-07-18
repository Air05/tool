const crypto = require("crypto");
let text = "hello world"

function encode(text,key){
	var secret = key || "asdhjwheru*asd123&123";
	var cipher = crypto.createCipher('aes-256-cfb',secret);
	var crypted =cipher.update(text,'utf8','hex');
	crypted+=cipher.final('hex');
	console.log(crypted);
	return crypted;
}

let encryptionCode = encode(text,"12345678")
console.log(encryptionCode)

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

decode(encryptionCode,"12345678")
