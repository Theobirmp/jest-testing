import {useTheme} from '@mui/material'
import {Typography} from '@mui/material'
// import { useEffect, useState } from 'react'
const Mui = () => {
    const theme = useTheme()
    // const [mode,setMode]=useState('dark')
    // const changeMode=()=>{
    //     setMode(mode==='dark'?'light':'dark')
    // }
    // useEffect(()=>{
    //     theme.palette.mode=mode
    // },[mode])
    // console.log(typeof theme.palette.mode)
  return (
    <>
        {/* <button onClick={changeMode}>{mode==='dark'?'light':'dark'}</button> */}
        <Typography component='h1'>{`${theme.palette.mode} mode`}</Typography>
    </>
  )
}

export default Mui