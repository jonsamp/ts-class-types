"use strict";
class ServerlessFunction {
    constructor(command) {
        this.command = '';
        if (command !== undefined) {
            this.command = command;
        }
    }
    runCommand() {
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
class DebugServerlessFunction extends ServerlessFunction {
    printDebugInfo() {
        console.log(`Operating system: ${this.getOperatingSystem()}`);
        console.log(`Server date: ${new Date()}`);
    }
}
const myFunction = new ServerlessFunction("console.log('hiiii')");
const debugFunction = new DebugServerlessFunction();
debugFunction.printDebugInfo();
myFunction.runCommand();
