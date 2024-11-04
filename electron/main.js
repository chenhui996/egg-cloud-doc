// electron main process
const { app, BrowserWindow } = require('electron');

let mainWindow;

async function createWindow() {
  const isDev = await import('electron-is-dev').then(mod => mod.default);

  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const urlLocation = isDev ? 'http://localhost:3000' : 'dummyurl';

  mainWindow.loadURL(urlLocation);
}

app.on('ready', createWindow);