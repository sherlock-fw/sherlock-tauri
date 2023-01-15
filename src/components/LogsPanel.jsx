import {listen} from '@tauri-apps/api/event';
import { ScrollArea } from '@mantine/core';

import {useRef} from 'react';
import '../assets/style/LogsPanel.scss';
import React from 'react';


const formatLog = (log) => {
    if(log.Error){
        return "Error:"+" "+log.Error+"\n";
    }
    else if(log.Info){
        return "Info:"+" "+log.Info+"\n";
    }
}


export default function LogsPanel(){

    const logs = useRef("no logs\n");
    const viewport = useRef(null);

    const listenLogs = async () => {
        await listen('log-event',(event)=>{
            logs.current.innerText += formatLog(event.payload);
            viewport.current.scrollTo({ top: viewport.current.scrollHeight, behavior: 'smooth' });
        })
    };
    listenLogs();


    return(
        <div className="logs-panel">
        <ScrollArea style={{height: 140}} viewportRef={viewport}>
          <text ref={logs}/>
        </ScrollArea>
        </div >
    );
}