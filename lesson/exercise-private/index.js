var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CodeRunner = /** @class */ (function () {
    function CodeRunner(command) {
        this.command = '';
        if (command !== undefined) {
            this.command = command;
        }
    }
    CodeRunner.prototype.runCommand = function () {
        this.printPreCommandMessage();
        eval(this.command);
    };
    CodeRunner.prototype.getOperatingSystem = function () {
        return 'ubuntu-latest';
    };
    CodeRunner.prototype.printPreCommandMessage = function () {
        console.log("".concat(new Date().toLocaleTimeString(), ": Running command on ").concat(this.getOperatingSystem(), " \n---"));
    };
    return CodeRunner;
}());
var DebugCodeRunner = /** @class */ (function (_super) {
    __extends(DebugCodeRunner, _super);
    function DebugCodeRunner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugCodeRunner.prototype.printDebugInfo = function () {
        console.log("Server date: ".concat(new Date()));
        console.log("Pre command message: ".concat(this.printPreCommandMessage()));
    };
    return DebugCodeRunner;
}(CodeRunner));
var myCodeRunner = new CodeRunner("console.log('hello world')");
myCodeRunner.runCommand();
