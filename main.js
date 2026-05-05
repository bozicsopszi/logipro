const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    autoHideMenuBar: true,
    title: "LogiVizsga Pro 2026",
    icon: "icon.ico"
  });

  win.loadFile('LogiPro.html');
}

app.whenReady().then(createWindow);