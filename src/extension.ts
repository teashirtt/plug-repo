import * as vscode from 'vscode';
import { getFuncNode } from './main'

export function activate(context: vscode.ExtensionContext) {
	vscode.commands.registerCommand('plug-repo.helloWorld', () => {

		const editor = vscode.window.activeTextEditor

		if (!editor) {
			return
		}

		const code = editor.document.getText()
		const index = editor.document.offsetAt(editor.selection.active)
		const node = getFuncNode(code, index)

		if (!node) {
			return
		}

		editor.edit((editBuilder) => {
			editBuilder.delete(
				new vscode.Range(new vscode.Position(node.start.line - 1, node.start.column), new vscode.Position(node.end.line - 1, node.end.column))
			)
			vscode.window.showInformationMessage('you\'ve delete a function!')
		})


	});
}

