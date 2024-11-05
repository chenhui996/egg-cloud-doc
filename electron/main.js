// electron main process
const { app, BrowserWindow, remote } = require('electron');

let mainWindow;

async function createWindow() {
  const isDev = await import('electron-is-dev').then(mod => mod.default);

  mainWindow = new BrowserWindow({
    width: 1680,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // 打开开发者工具  
  mainWindow.webContents.openDevTools();

  const urlLocation = isDev ? 'http://localhost:3000' : 'dummyurl';

  mainWindow.loadURL(urlLocation);
}

app.on('ready', createWindow);