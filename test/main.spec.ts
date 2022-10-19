import { test, expect } from 'vitest'
import { getFuncNode } from '../src/main'

test('init', () => {
    const code = `
      function func1(){
        console.log("tom")
      }
      
      function func2(){
        console.log("mare")
      }
    `
    const index = 10
    const node = getFuncNode(code, index)
    expect(true).toBe(true)
})