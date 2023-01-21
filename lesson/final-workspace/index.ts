class CodeRunner {
  readonly command: string = '' // exercise 4.1: add readonly

  constructor(command?: string) {
    if (command !== undefined) {
      this.command = command;
    }
  }

  public runCommand() { // excercise 2.1: add public
    // this.command = 'return null'; // exercise 4.2: errror on purpose
    this.printPreCommandMessage();
    eval(this.command);
  }

  protected getOperatingSystem() { // exercise 5.1: add protected
    return 'ubuntu-latest';
  }

  private printPreCommandMessage() { // exercise 3.1: add private
    console.log(`${new Date().toLocaleTimeString()}: Running command on ${this.getOperatingSystem()} \n---`)
  }
}

class DebugCodeRunner extends CodeRunner {
  public printDebugInfo() { // exercise 2.2: add public
    console.log(`Server date: ${new Date()}`);
    // console.log(`Pre command message: ${this.printPreCommandMessage()}`);
    console.log(`Operating system: ${this.getOperatingSystem()}`);  // exercise 5.2: add call to protected method
  }
}

const myCodeRunner = new CodeRunner("console.log('hello world')");
myCodeRunner.runCommand();

const myDebugCodeRunner = new DebugCodeRunner(); // exercise 5.3: instantiate instance
myDebugCodeRunner.printDebugInfo(); // excersize 5.4: call debug