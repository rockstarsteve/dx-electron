const {app, BrowserWindow} = require('electron')

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 900,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html文件
  win.loadFile('index.html')
}

app.on("ready", () => {
  console.log("ok")
  createWindow()
})


app.on("quit", () => {
  console.log("退出了。。。。。。")
})


// app.whenReady().then(createWindow)
