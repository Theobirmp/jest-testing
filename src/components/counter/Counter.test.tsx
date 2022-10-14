import { render, screen } from "@testing-library/react"
import Counter from "./Counter"
import user from '@testing-library/user-event'
describe('counter increments correctly',()=>{
    test('increment by 1',()=>{
        render(<Counter/>)
        const buttonElement=screen.getByRole('button',{name:'0'})
        expect(buttonElement).toBeInTheDocument()
        user.click(buttonElement)
        user.click(buttonElement)
        user.click(buttonElement)
        expect(buttonElement).toHaveTextContent('3')
    })
    test('add class on hover',()=>{
        render(<Counter/>)
        const buttonElement=screen.getByRole('button',{name:'0'})
        expect(buttonElement).toBeInTheDocument()
        user.hover(buttonElement)
        expect(buttonElement).toHaveClass('hovering')
    })
})