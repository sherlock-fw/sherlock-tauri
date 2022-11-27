const {app, win, BrowserWindow } = require('electron')
const path = require('path')

const is_dev = !app.isPackaged;

function  createWindow(){
	const win = new BrowserWindow({
		width: 1200,
		height: 800,
		backgroundColor: "white",
		webPreferences: {
			nodeIntegration: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true
		}
	})

	win.loadFile('index.html');
}

if(is_dev){
	require('electron-reload')(__dirname,{
		electron: path.join(__dirname, 'node_modules','.bin','electron')
	})
}
app.whenReady()
	.then(createWindow)
