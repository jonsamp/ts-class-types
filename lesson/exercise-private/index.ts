class CodeRunner {
  command: string = ''

  constructor(command?: string) {
    if (command !== undefined) {
      this.command = command;
    }
  }

  public runCommand() {
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
    console.log(`Pre command message: ${this.printPreCommandMessage()}`);
  }
}

const myCodeRunner = new CodeRunner("console.log('hello world')")
myCodeRunner.runCommand();