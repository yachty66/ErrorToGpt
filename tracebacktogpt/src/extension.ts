import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  vscode.window.onDidOpenTerminal((terminal) => {
    console.log(`Terminal opened. name:${terminal.name} id:${terminal.processId}`);

    const writeEmitter = new vscode.EventEmitter<string>();
    const pty: vscode.Pseudoterminal = {
      onDidWrite: writeEmitter.event,
      open: () => { /* noop*/ },
      close: () => { /* noop*/ },
      handleInput: (data: string) => {
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
