# inserttemplates README

*Столяров Фёдор M3102*

InsertTemplates - это расширение для текстового редактора кода Visual Studio Code, которое позволяет при нажатии определённой комбинации клавиш вставлять в текстовый файл шаблон кода.

## Features

- Insert Text 0

    Keybind - `ctrl + 0`

    Insert:
    ```c++
	Your text
    ```

## Instruction

Для того чтобы добавить свой бинд, нужно выполнить сделать:

1) Открыть файл **src\extension.ts**, скопировать код для бинда из функции activate и вставить ниже так, чтобы между ними была пустая строка (для удобства восприятия информации).
    ```ts
    const InsertText0 = vscode.commands.registerCommand('extension.InsertText0', () => {
        InsertCode('Your text');
        vscode.window.showInformationMessage('Text inserted successfully.');
    });
    context.subscriptions.push(InsertText0);
    ```
2) Прочитать комментарий в этом файле и изменить скопированный код, следуя указаниям из этого комментария.
    ```ts
    // Для добавления своих элементов нужно скопировать код для бинда с номером 0 и вставить его ниже, где вместо 0 нужно написать номер бинда, а вместо Your text написать свой текст, который нужно вставить.
    ```
3) Открыть файл **package.json**, скопировать код для бинда из "contributes": {"commands": } и "contributes": {"keybindings": } и вставить ниже так, чтобы между ними была запятая.
    ```json
    "contributes": {
    "commands": [
        {
        "command": "extension.InsertText0",
        "title": "Insert Text 0"
        }
    ],
    "keybindings": [
        {
        "command": "extension.InsertText0",
        "key": "ctrl+0",
        "when": "editorTextFocus"
        }
    ]
    },
    ```
4) Изменить скопированный код, следуя указаниям из комментария в файле **src\extension.ts**.
    ```ts
    // Далее в файле package.json нужно скопировать шаблоны в contributes и вставить их через запятую, где вместо 0 нужно написать номер бинда, а вместо ctrl+0 написать нужную комбинацию клавиш
    ```

## Example

Если нужно добавить функцию, который при нажатии комбинации клавиш "ctrl+h" выводил текст "Hello!", нужно добавить бинд по инструкции, после чего код (разделы, в которых прошли изменеия) будет выглядеть так:

- **extension.ts**:

    ```ts
    export function activate(context: vscode.ExtensionContext) {
        
        const InsertText0 = vscode.commands.registerCommand('extension.InsertText0', () => {
            InsertCode('Your text');
            vscode.window.showInformationMessage('Text inserted successfully.');
        });
        context.subscriptions.push(InsertText0);

        const InsertText1 = vscode.commands.registerCommand('extension.InsertText1', () => { // заменил номер на 1 в двух местах
            InsertCode('Hello!'); // заменил текст на Hello!
            vscode.window.showInformationMessage('Text inserted successfully.');
        });
        context.subscriptions.push(InsertText1); // заменил номер на 1
        
    }
    ```

- package.json

    ```json
    "contributes": {
      "commands": [
        {
          "command": "extension.InsertText0",
          "title": "Insert Text 0"
        }, // разделил запятой
        {
          "command": "extension.InsertText1", // заменил номер на 1
          "title": "Insert Text 1" // заменил номер на 1
        }
      ],
      "keybindings": [
        {
          "command": "extension.InsertText0",
          "key": "ctrl+0",
          "when": "editorTextFocus"
        }, // разделил запятой
        {
          "command": "extension.InsertText1", // заменил номер на 1
          "key": "ctrl+h", // // заменил комбинацию клавиш на ctrl+h
          "when": "editorTextFocus"
        }
      ]
    },
    ```