import { useState } from 'react'

const Keyboard = () => {
    const [counter,setCounter]=useState('')
  return (
    <>
        <input type="number" value={counter} onChange={(e)=>setCounter(e.currentTarget.value)}/>
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        <h1>{counter}</h1>
    </>
  )
}

export default Keyboard