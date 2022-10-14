import { useState } from "react"
import initialCounterType from "./userCounter.types"

export const useCounter=({initialCounter=0}:initialCounterType={})=>{
    const [counter,setCounter]=useState(initialCounter)
    const incrementCounter=()=>setCounter(counter=>counter+1)
    const decrementCounter=()=>setCounter(counter=>counter+-1)

    return {counter,incrementCounter,decrementCounter}
}