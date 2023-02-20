import wordList from './words.json';

class PasswordGenerator {
  readonly passwordLength: number = 12;

  constructor(_length: number) {
    this.passwordLength = _length;
  }

  public generatePassword(): string {
    let password = '';

    for (let i = 0; i < this.passwordLength; i++) {
      password += this.generateRandomCharacter();
    }

    return password;
  }

  protected getRandomItem(array: string[]): string {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  private generateRandomCharacter(): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const randomCharacter = this.getRandomItem(characters);

    if (Math.random() > 0.5) {
      return randomCharacter.toUpperCase();
    }

    return randomCharacter;
  }
}

class ReadablePasswordGenerator extends PasswordGenerator {
  public generatePassword(): string {
    let password = '';

    while(password.length < this.passwordLength + 1) {
      password += this.generateRandomWord() + '-';
    }

    return password.slice(0, -1);
  }

  private generateRandomWord(): string {
    const randomWord = this.getRandomItem(wordList);
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


