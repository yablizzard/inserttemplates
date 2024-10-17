# inserttemplates README

*Столяров Фёдор M3102*

InsertTemplates - это расширение для текстового редактора кода Visual Studio Code, которое позволяет при нажатии определённой комбинации клавиш вставлять в текстовый файл шаблон кода.

## Features

- Insert For Template

    Keybind - `ctrl + 1`

    Insert:
    ```c++
	    for (int i = 0; i < n; ++i) {
            
	    }


    ```

- Insert While Template

    Keybind - `ctrl + 2`

    Insert:
    ```c++
	    while (i > 0) {
            
	    }


    ```

- Insert Do-While Template

    Keybind - `ctrl + 3`

    Insert:
    ```c++
	    do {
            
	    } while (i > 0);


    ```

- Insert Array-Input Template

    Keybind - `ctrl + 4`

    Insert:
    ```c++
	    int n;
	    cin >> n;

	    int a[n];
	    for (int i = 0; i < n; ++i) {
		    cin >> a[i];
	    }


    ```

- Insert Array-Output Template

    Keybind - `ctrl + 5`

    Insert:
    ```c++
	    for (int i = 0; i < n; ++i) {
	    	cout << a[i] << endl;
	    }
	
	
    ```

- Insert Empty Project Template

    Keybind - `ctrl + 6`

    Insert:
    ```c++
    #include <iostream>

    using namespace std;

    int main() {
	
	    return 0;
    }

    ```
