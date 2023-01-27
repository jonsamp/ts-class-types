"use strict";
class CodeRunner {
    constructor(command) {
        this.command = ''; // exercise 4.1: add readonly
        if (command !== undefined) {
            this.command = command;
        }
    }
    runCommand() {
        this.command = 'return null'; // exercise 4.2: errror on purpose
        this.printPreCommandMessage();
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
    }
}
const myCodeRunner = new CodeRunner("console.log('hello world')");
myCodeRunner.runCommand();
