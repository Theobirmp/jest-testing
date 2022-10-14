import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Keyboard from "./Keyboard";

describe("keyboard component",()=>{
    test('keyboard typing and increment',()=>{
        render(<Keyboard/>)
        const inputElement = screen.getByRole('spinbutton')
        expect(inputElement).toBeInTheDocument()
        const incrementButton=screen.getByRole("button",{name:/increment/i})
        expect(incrementButton).toBeInTheDocument()
        userEvent.type(inputElement,'69')
        userEvent.click(incrementButton)

        expect(inputElement).toHaveValue(691)

    })
    test('elements are focused in the right order',()=>{
        render(<Keyboard/>)
        const inputElement=screen.getByRole("spinbutton")
        const incrementButton=screen.getByRole('button',{name:/increment/i})
        userEvent.tab()
        expect(inputElement).toHaveFocus()
        userEvent.tab()
        expect(incrementButton).toHaveFocus()
    })
})