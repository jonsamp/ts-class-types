"use strict";
class CodeRunner {
    constructor(command) {
        this.command = '';
        if (command !== undefined) {
            this.command = command;
        }
    }
    runCommand() {
        eval(this.command);
    }
    getOperatingSystem() {
        return 'ubuntu-latest';
    }
    printPreCommandMessage() {
        console.log(`${new Date().toLocaleTimeString()}: Running command on ${this.getOperatingSystem()} \n---`);
    }
}
class DebugCodeRunner extends CodeRunner {
    printDebugInfo() {
        console.log(`Server date: ${new Date()}`);
        console.log(`Operating system: ${this.getOperatingSystem()}`);
    }
}
const myCodeRunner = new CodeRunner("console.log('hello world')");
myCodeRunner.runCommand();
