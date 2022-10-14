import {ThemeProvider,createTheme} from '@mui/material'
import {CssBaseline} from '@mui/material'
const theme = createTheme({
    palette:{
        mode:'dark'
    }
})

type childrenType={
    children:React.ReactNode
}

export const MuiProvider=({children}:childrenType)=>{
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
        {children}
        </ThemeProvider>
    )
}