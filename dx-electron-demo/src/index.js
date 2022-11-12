const path = require("path");
const { app, BrowserWindow, ipcMain } = require("electron");

console.log("__dirname", __dirname);

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    show: false,
    frame: false,
    titleBarOverlay: "hidden",
    webPreferences: {
      nodeIntegration: true,
      // contextIsolation: false
      preload: path.resolve(__dirname, "./js/preload.js"),
    },
  });
  win.loadFile("./src/page/index.html");
  win.webContents.openDevTools();
  win.on("ready-to-show", () => {
    win.show();
  });
});

ipcMain.handle("sendEvent", (event, msg) => {
  console.log(msg);
  //返回消息给渲染进程
  return msg;
});
