const { app, BrowserWindow, session } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    icon: 'icon.png',
    resizable: true,
    center: true,
    autoHideMenuBar: true,
    show: false,
  });
  win.maximize();
  win.show();
  win.loadFile('index.html');
};

app.whenReady().then(async () => {
  await session.defaultSession.clearStorageData();
  createWindow();
});
