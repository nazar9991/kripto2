require("pidcrypt/seedrandom");
var pidCrypt = require("pidcrypt");

require("pidcrypt/aes_cbc");
var  aes  =  new  pidCrypt. AES. CBC();

const fs = require("fs");
// -------------------------------


function encryptFile(filePath) {
  fs. readFile(filePath,  "utf8",  (err,  data) => {
    if  (err)  return  console. error(err);

    const  encryptedText  =  aes. encryptText(data);

    const  newFilePath  =  filePath. replace(/\. txt$/,  ".enc");

    fs. writeFile(newFilePath,  encryptedText,  (err) => {
      if  (err)  return  console. error(err);

      console. log('Text in the file '${filePath}' was successfully encrypted and saved in the file " ${newFilePath} ".);

      fs. unlink(filePath,  (err) => {
        if  (err)  return  console. error(err);

        console. log(`File "${filePath}" was successfully removed.`);
      });
    });
  });
}

encryptFile("text.txt");