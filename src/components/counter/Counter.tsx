import React, { useRef, useState } from "react"
import { useCounter } from "../../hooks/useCounter"
const Counter = () => {
    const {counter:myCounter}=useCounter()
    const [counter,setCounter]=useState(0)
    const buttonRef=useRef<HTMLButtonElement>(null!)

    const handleMouseOver=(e:React.MouseEvent<HTMLButtonElement>)=>{
        buttonRef.current.classList.add('hovering')
    }
    const handleMouseLeave=(e:React.MouseEvent<HTMLButtonElement>)=>{
        buttonRef.current.classList.remove('hovering')
    }
    
  return (
    <>
    <button ref={buttonRef} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={()=>setCounter(counter=>counter+1)}>{counter}</button>
    {/* <h1>useCounter Hook</h1>
    <button style={{display:'block',width:'100px',fontSize:'40px'}}>{myCounter}</button> */}
    </>
  )
}

export default Counter