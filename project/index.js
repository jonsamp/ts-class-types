"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const words_json_1 = __importDefault(require("./words.json"));
class PasswordGenerator {
    constructor(_length) {
        this.passwordLength = 12;
        this.passwordLength = _length;
    }
    generatePassword() {
        let password = '';
        for (let i = 0; i < this.passwordLength; i++) {
            password += this.generateRandomCharacter();
        }
        return password;
    }
    getRandomItem(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
    generateRandomCharacter() {
        const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const randomCharacter = this.getRandomItem(characters);
        if (Math.random() > 0.5) {
            return randomCharacter.toUpperCase();
        }
        return randomCharacter;
    }
}
class ReadablePasswordGenerator extends PasswordGenerator {
    generatePassword() {
        let password = '';
        while (password.length < this.passwordLength + 1) {
            password += this.generateRandomWord() + '-';
        }
        return password.slice(0, -1);
    }
    generateRandomWord() {
        const randomWord = this.getRandomItem(words_json_1.default);
        return randomWord;
    }
}
const myPasswordGenerator = new PasswordGenerator(30);
const password = myPasswordGenerator.generatePassword();
const myReadablePasswordGenerator = new ReadablePasswordGenerator(30);
const readablePassword = myReadablePasswordGenerator.generatePassword();
console.log(`
Generated password:
${password}

Generated readable password:
${readablePassword}
`);
