import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

export function getFuncNode(code: string, index: number) {

    let node
    const ast = parse(code)
    traverse(ast, {
        FunctionDeclaration(path) {
            console.log(path.node)
            if (index >= path.node?.start! && index <= path.node?.end!)
                node = {
                    name: path.node?.id?.name,
                    start: path.node?.loc?.start,
                    end: path.node?.loc?.end
                }
        }
    })
    return node
}