import React from 'react';
import { useMantineTheme } from '@mantine/core';

export default function SettingsView(){
    const theme = useMantineTheme()
    return(
        <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h1 style={{fontSize:"22px",color:theme.colors.cyan[1],align:"center"}}>no settings yet.</h1>
        </div>
    )

}