const {ipcRenderer,contextBridge} = require('electron');


contextBridge.exposeInMainWorld('e_ipc',{
        sendNotification(message){
            ipcRenderer.send('notify',message);
        }
    
})

