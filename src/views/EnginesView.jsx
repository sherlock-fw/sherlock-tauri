import React from 'react';
import { useMantineTheme } from '@mantine/core';


/*
EnginesView:
A view that is used for showing the  various engines results.
*/
export default function EnginesView(){
    const theme = useMantineTheme()
    return(
        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{fontSize:"22px",color:theme.colors.cyan[1],align:"center"}}>no engines yet.</h1>
        </div>
    )

}