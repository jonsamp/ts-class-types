class CodeRunner {
  command: string = ''

  constructor(command?: string) {
    if (command !== undefined) {
      this.command = command;
    }
  }

  public runCommand() { // excercise 2.1: add public
    this.printPreCommandMessage();
    eval(this.command);
  }

  getOperatingSystem() {
    return 'ubuntu-latest';
  }

  printPreCommandMessage() {
    console.log(`${new Date().toLocaleTimeString()}: Running command on ${this.getOperatingSystem()} \n---`)
  }
}

class DebugCodeRunner extends CodeRunner {
  public printDebugInfo() { // exercise 2.2: add public
    console.log(`Server date: ${new Date()}`);
    console.log(`Pre command message: ${this.printPreCommandMessage()}`);
  }
}

const myCodeRunner = new CodeRunner("console.log('hello world')")
myCodeRunner.runCommand();