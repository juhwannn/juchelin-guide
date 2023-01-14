console.log(`${__filename}:1`);

const bcrypt = require("bcrypt");
const crypto = require("crypto-js");

const saltRounds = 10;
const cryptoKey = process.env.CRYPTO_KEY;

module.exports = {
    saltRounds: saltRounds,
    hash: (p) => bcrypt.hash(p, saltRounds),
    compare: (p, hash) => bcrypt.compare(p, hash),
    AESEncrypt: (data) => crypto.AES.encrypt(data, cryptoKey).toString(),
    AESDecrypt: (data) => {
        const bytes = crypto.AES.decrypt(data, cryptoKey);

        return bytes.toString(crypto.enc.Utf8);
    },
};