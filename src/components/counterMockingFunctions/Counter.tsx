import CounterPropsTypes from "./Counter.types"
const Counter = ({counter,handleIncrement,handleDecrement}:CounterPropsTypes) => {
  return (
    <>
        <h1>Counter Mocking Functions</h1>
        <p>{counter}</p>
        {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
        {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </>
  )
}

export default Counter