import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// Для добавления своих элементов нужно скопировать код для бинда с номером 0 и вставить его ниже, где вместо 0 нужно написать номер бинда, а вместо Your text написать свой текст, который нужно вставить.
	// Далее в файле package.json нужно скопировать шаблоны в contributes и вставить их через запятую, где вместо 0 нужно написать номер бинда, а вместо ctrl+0 написать нужную комбинацию клавиш
	//
    const InsertText0 = vscode.commands.registerCommand('extension.InsertText0', () => {
        InsertCode('Your text');
		vscode.window.showInformationMessage('Text inserted successfully.');
    });
    context.subscriptions.push(InsertText0);
	//
}

export function InsertCode(code: string) {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
        editor.edit(editBuilder => {
            editBuilder.insert(editor.selection.active, code);
        });
    }
}

export function deactivate() {}
