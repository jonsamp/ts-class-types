class CodeRunner {
  readonly command: string = '';

  constructor(command?: string) {
    if (command !== undefined) {
      this.command = command;
    }
  }

  public runCommand() {
    this.printPreCommandMessage();
    eval(this.command);
  }

  protected getOperatingSystem() { // exercise 5.1: add protected
    return 'ubuntu-latest';
  }

  private printPreCommandMessage() {
    console.log(`${new Date().toLocaleTimeString()}: Running command on ${this.getOperatingSystem()} \n---`);
  }
}

class DebugCodeRunner extends CodeRunner {
  public printDebugInfo() {
    console.log(`Server date: ${new Date()}`);
    console.log(`Operating system: ${this.getOperatingSystem()}`);
  }
}

const myCodeRunner = new CodeRunner("console.log('hello world')")
myCodeRunner.runCommand();

const myDebugCodeRunner = new DebugCodeRunner();
myDebugCodeRunner.printDebugInfo(); // excersize 5.2: call debug
myDebugCodeRunner.getOperatingSystem(); // excersize 5.3: call debug