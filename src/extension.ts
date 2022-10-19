import * as vscode from 'vscode';


export function activate(context: vscode.ExtensionContext) {
	vscode.commands.registerCommand('plug-repo.helloWorld', () => {
		vscode.window.showInformationMessage('you\'re liar!')

		const editor = vscode.window.activeTextEditor

		if (!editor) {
			return
		}

		editor.edit((editBuilder) => {
			editBuilder.delete(
				new vscode.Range(new vscode.Position(0, 1), new vscode.Position(2, 1))
			)
		})

		
	});
}

