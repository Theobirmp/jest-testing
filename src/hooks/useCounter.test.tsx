import { renderHook,act, render } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe('useCounter hook works correctly',()=>{
    test('count renders',()=>{
        const {result} = renderHook(useCounter,{initialProps:{initialCounter:0}})
        expect(result.current.counter).toBe(0)
    })    
    test('counter increments and decrements correctly',()=>{
        const {result} = renderHook(useCounter,{initialProps:{initialCounter:0}})
        act(()=>result.current.incrementCounter())
        expect(result.current.counter).toBe(1)
    })
    test('counter renders without initialState',()=>{
        const {result} = renderHook(useCounter)
        expect(result.current.counter).toBe(0)
    })
})
