const { app, BrowserWindow, globalShortcut } = require('electron');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 500,
    webPreferences: {
      preload: `${__dirname}/preload.js`,
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  mainWindow.loadFile('index.html');

  // Register a global shortcut (Ctrl+Shift+A) to toggle the app
  globalShortcut.register('Ctrl+Shift+A', () => {
    if (mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.show();
    }
  });
});

// Unregister all shortcuts on app quit
app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});
