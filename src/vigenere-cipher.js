const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct=true) {
    this.direct = direct;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }


  encrypt(text, key) {
    let gamma = '';
    text = text.toUpperCase();
    let q = this.alphabet.length;
    let keyCode, alphabetCode;
    let result = '';
    let el=0;
    if (text != null && key != null) {
      while (key.length < text.length) {
        key += key;
      }
      for (let j = 0; j < text.length; j++) {
        if(text[j]==' '){
          gamma+=' '
        }else{
          gamma+=key[el];
          el++;
        }
      }

      gamma = gamma.substring(0, text.length).toUpperCase();
      for (let i = 0; i < text.length; i++) {
        keyCode = this.alphabet.indexOf(gamma[i]);
        alphabetCode = this.alphabet.indexOf(text[i]);
        if (alphabetCode < 0) {
          result += text[i].toString();
        }
        else {
          result += this.alphabet[(q + alphabetCode + keyCode) % q].toString();
        }
      }
      return this.direct ? result.toUpperCase():result.split('').reverse().join('').toUpperCase() ;
    } else {
      throw new Error('Error');
    }

  }

  decrypt(text, key) {
    let gamma = '';
    let el=0;
    text = text.toUpperCase();
    let q = this.alphabet.length;
    let keyCode, alphabetCode;
    let result = '';
    if (text != null && key != null) {

      while (key.length < text.length) {
        key += key;
      }
      for (let j = 0; j < text.length; j++) {
        if(text[j]==' '){
          gamma+=' '
        }else{
          gamma+=key[el];
          el++;
        }
      }
      gamma = gamma.substring(0, text.length).toUpperCase();

      for (let i = 0; i < text.length; i++) {
        keyCode = this.alphabet.indexOf(gamma[i]);
        alphabetCode = this.alphabet.indexOf(text[i]);
        if (alphabetCode < 0) {
          result += text[i].toString();
        }
        else {
          result += this.alphabet[(q + alphabetCode - keyCode) % q].toString();
        }
      }
      return this.direct ? result.toUpperCase():result.split('').reverse().join('').toUpperCase() ;
    } else {
      throw new Error('Error');
    }
  }
}

module.exports = VigenereCipheringMachine;
