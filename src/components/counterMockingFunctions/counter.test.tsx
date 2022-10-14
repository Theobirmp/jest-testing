import { screen,render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe('counter works as expected',()=>{
    test('counter renders with all props',()=>{
        render(<Counter counter={0}/>)
        const headingElement = screen.getByRole('heading',{level:1})
        expect(headingElement).toBeInTheDocument()
    })
    test('counter functions are called when props present',()=>{
        //create mock functions
        const handleIncrement = jest.fn()
        const handleDecrement = jest.fn()
        render(<Counter counter={0} handleIncrement={handleIncrement} handleDecrement={handleDecrement}/>)
        const buttonElement = screen.getByRole('button',{name:/increment/i})
        userEvent.click(buttonElement)
        expect(handleIncrement).toBeCalledTimes(1)
        expect(handleDecrement).toBeCalledTimes(0)
        
    })
})