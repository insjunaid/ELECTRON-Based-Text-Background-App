const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  logText: (text) => console.log(text),
});
