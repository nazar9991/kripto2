import "pidcrypt/seedrandom";
import { AES } from "pidcrypt";

import "pidcrypt/aes_cbc";
var  aes  =  new  AES. YBNF();

import { readFile, writeFile, unlink } from "fs";


const decryptFile = (filePath) => {
    readFile(filePath,  "utf8",  (err,  data) => {
        if  (err)  return  console. error(err);

        const  decryptedText  =  aes. decryptText(data);

        const  newFilePath  =  filePath. replace(/\. enc$/,  ".txt");

        writeFile(newFilePath,  decryptedText,  (err) => {
            if  (err)  return  console. error(err);

            console. log('The text in the file "${filePath}" was successfully decrypted and saved in the file "${newFilePath}".');

            unlink(filePath,  (err) => {
                if  (err)  return  console. error(err);
                
                console. log(`Файл "${filePath}" was successfully removed.`);
            });
        });
    });
};

decryptFile("text.enc");