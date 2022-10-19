import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

interface FunctionNode {
    name: string
    start: {
        line: number
        column: number
        index: number
    };
    end: {
        line: number
        column: number
        index: number
    };
}

export function getFuncNode(code: string, index: number): FunctionNode | undefined {
    let node
    const ast = parse(code)
    traverse(ast, {
        FunctionDeclaration(path) {
            if (index >= path.node?.start! && index <= path.node?.end!)
                node = {
                    name: path.node?.id?.name,
                    start: path.node?.loc?.start,
                    end: path.node?.loc?.end
                }
        },
        ArrowFunctionExpression(path){
            const p=path.parentPath.parentPath
            if(p?.isVariableDeclaration()){
                if(index>=p.node?.start!&&index<=p.node?.end!){
                    node ={
                        name:Object.keys(path.parentPath.getBindingIdentifiers())[0],
                        start:p.node?.loc?.start,
                        end:p.node?.loc?.end
                    }
                }
            }
        }
    })
    return node
}