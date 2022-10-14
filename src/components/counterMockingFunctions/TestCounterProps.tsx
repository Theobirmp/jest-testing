import Counter from "./Counter"
const TestCounterProps = () => {
  return (
    <Counter counter={0} handleIncrement={()=>console.log('counter increment')} handleDecrement={()=>console.log('counter decrement')}/>
  )
}

export default TestCounterProps