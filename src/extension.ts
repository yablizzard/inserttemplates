// Импортирует модуль 'vscode', который содержит API расширения VS Code
import * as vscode from 'vscode';

// Функция с шаблонами, которая вызывается при активации расширения, которое будет активировано при первом выполнении команды
export function activate(context: vscode.ExtensionContext) {
	// Используя оператор const, объявляем неизменяемую переменную InsertForTemplate - нашу новую команду
	// С помощью vscode.commands.registerCommand(comandName, comandHandler) привязывает идентификатор 'extension.InsertForTemplate' к функции
	// Вызываем функцию insertCode(), которая будет вставлять в код 'for (int i = 0; i < n; ++i) {\n\t\t\n\t}\n\t\n\t' в файл
	//
	// for (int i = 0; i < n; ++i) {
	//     
	// }
	//
	// С помощью vscode.window.showInformationMessage(message) выводим уведомление 'For Template inserted successfully.' о том, что код успешно вставлен
    const InsertForTemplate = vscode.commands.registerCommand('extension.InsertForTemplate', () => {
        InsertCode('for (int i = 0; i < n; ++i) {\n\t\t\n\t}\n\t\n\t');
		vscode.window.showInformationMessage('For Template inserted successfully.');
    });

	// Аналогично первому шаблону, создаём другие, которые работают так же
    const InsertWhileTemplate = vscode.commands.registerCommand('extension.InsertWhileTemplate', () => {
        InsertCode('while (i > 0) {\n\t\t\n\t}\n\t\n\t');
		vscode.window.showInformationMessage('While Template inserted successfully.');
    });

	const InsertDoWhileTemplate = vscode.commands.registerCommand('extension.InsertDoWhileTemplate', () => {
        InsertCode('do {\n\t\t\n\t} while (i > 0);\n\t\n\t');
		vscode.window.showInformationMessage('Do-While Template inserted successfully.');
    });

	const InsertArrayInputTemplate = vscode.commands.registerCommand('extension.InsertArrayInputTemplate', () => { 
        InsertCode('int n;\n\tcin >> n;\n\t\n\tint a[n];\n\tfor (int i = 0; i < n; ++i) {\n\t\tcin >> a[i];\n\t}\n\t\n\t');
		vscode.window.showInformationMessage('Array-Input Template inserted successfully.');
    });

	const InsertArrayOutputTemplate = vscode.commands.registerCommand('extension.InsertArrayOutputTemplate', () => { 
        InsertCode('for (int i = 0; i < n; ++i) {\n\t\tcout << a[i] << endl;\n\t}\n\t\n\t');
		vscode.window.showInformationMessage('Array-Output Template inserted successfully.');
    });

	const InsertEmptyProjectTemplate = vscode.commands.registerCommand('extension.InsertEmptyProjectTemplate', () => {
        InsertCode('#include <iostream>\n\nusing namespace std;\n\nint main() {\n\t\n\treturn 0;\n}\n');
		vscode.window.showInformationMessage('Empty-Project Template inserted successfully.');
    });

	// Добавляет функции в массив subscriptions в объекте context для удаления объектов после деактивации расширения
    context.subscriptions.push(InsertForTemplate);
    context.subscriptions.push(InsertWhileTemplate);
	context.subscriptions.push(InsertDoWhileTemplate);
	context.subscriptions.push(InsertArrayInputTemplate);
	context.subscriptions.push(InsertArrayOutputTemplate);
	context.subscriptions.push(InsertEmptyProjectTemplate);
}

// Добавляем функцию вывода InsertCode, которая принимаетна вход строку - код, который будет вставлен в файл
export function InsertCode(code: string) {
	// Используя оператор const, объявляем неизменяемую переменную editor, которая получает активный текстовый редактор, в который будет вставляться код
    const editor = vscode.window.activeTextEditor;

	// Проверяем, открыт ли текстовый редактор, в который будет вставляться код
    if (editor) {
		// Метод edit
		// Метод editBuilder позволяет редактировать файл
        editor.edit(editBuilder => {
			// С помощью editBuilder.insert вставляем код
			// activeTextEditor.selection.active возвращает позицию курсора в файле
			// code - строка (код), которая будет вставлена в файл в место, где находится курсор
            editBuilder.insert(editor.selection.active, code);
        });
    }
}

// Функция, которая вызывается для деактивации расширения
export function deactivate() {}
