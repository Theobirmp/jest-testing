import { render,screen } from "@testing-library/react";
import { MuiProvider } from "../../providers/MuiProvider";
import Mui from "./Mui";

describe('mui',()=>{
    test('renders text correctly',()=>{
        render(<Mui/>,{wrapper:MuiProvider})
        const headingElement=screen.getByRole('heading',{level:1})
        expect(headingElement).toHaveTextContent('dark mode')
    })
})