"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    vscode.window.onDidOpenTerminal((terminal) => {
        console.log(`Terminal opened. name:${terminal.name} id:${terminal.processId}`);
        const writeEmitter = new vscode.EventEmitter();
        const pty = {
            onDidWrite: writeEmitter.event,
            open: () => { },
            close: () => { },
            handleInput: (data) => {
                writeEmitter.fire(data);
            }
        };
        const terminalShellListener = vscode.window.createTerminal({ name: 'Terminal Shell Listener', pty });
        terminalShellListener.show(true);
        writeEmitter.event((data) => {
            console.log(`Terminal output: ${data}`);
        });
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map