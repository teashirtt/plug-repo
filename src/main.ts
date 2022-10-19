import { parse } from '@babel/parser'
import traverse from '@babel/traverse'

interface FunctionNode {
    name: string;
    start: {
        line: number;
        column: number;
        index: number;
    };
    end: {
        line: number;
        column: number;
        index: number;
    };
}

export function getFuncNode(code: string, index: number): FunctionNode | undefined {
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