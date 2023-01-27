class CodeRunner {
  readonly command: string = '' // exercise 4.1: add readonly

  constructor(command?: string) {
    if (command !== undefined) {
      this.command = command;
    }
  }

  public runCommand() {
    this.command = 'return null'; // exercise 4.2: errror on purpose
    this.printPreCommandMessage();
    eval(this.command);
  }

  getOperatingSystem() {
    return 'ubuntu-latest';
  }

  private printPreCommandMessage() { // exercise 3.1: add private
    console.log(`${new Date().toLocaleTimeString()}: Running command on ${this.getOperatingSystem()} \n---`);
  }
}

class DebugCodeRunner extends CodeRunner {
  public printDebugInfo() {
    console.log(`Server date: ${new Date()}`);
  }
}

const myCodeRunner = new CodeRunner("console.log('hello world')")
myCodeRunner.runCommand();