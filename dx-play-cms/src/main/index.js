'use strict'

// eslint-disable-next-line standard/object-curly-even-spacing
import { app, BrowserWindow, Tray, Menu} from 'electron'
const path = require('path')
let tray = null
let mainWindow

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
// eslint-disable-next-line no-path-concat
console.log('__static地址:' + __static)
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`
function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({fullscreen: true})

  mainWindow.loadURL(winURL)

  // 关闭窗口的调试工具
  mainWindow.webContents.closeDevTools()
  mainWindow.setMenu(null)
  // 窗口关闭的监听
  mainWindow.on('closed', (event) => {
    mainWindow = null
  })
  // 当我们点击关闭时触发close事件，我们按照之前的思路在关闭时，隐藏窗口，隐藏任务栏窗口
  // event.preventDefault(); 禁止关闭行为(非常必要，因为我们并不是想要关闭窗口，所以需要禁止默认行为)
  mainWindow.on('close', (event) => {
    mainWindow.hide()
    mainWindow.setSkipTaskbar(true)
    event.preventDefault()
  })
  mainWindow.on('show', () => {
    tray.setHighlightMode('always')
  })
  mainWindow.on('hide', () => {
    tray.setHighlightMode('never')
  })
  // 创建系统通知区菜单
  tray = new Tray(path.join(__static, '/images/sys/soft-logo.png'))
  const contextMenu = Menu.buildFromTemplate([
    {label: '启动服务', icon: __static + '/images/sys/start.png', click: function () {}},
    {label: '停止服务', icon: __static + '/images/sys/stop.png', click: function () {}},
    {label: '退出', icon: __static + '/images/sys/exit.png', click: () => { mainWindow.destroy() }}, // 我们需要在这里有一个真正的退出（这里直接强制退出）
    {label: '关于', icon: __static + '/images/sys/about.png', click: function () {}}
  ])
  tray.setToolTip('我的托盘测试')
  tray.setContextMenu(contextMenu)
  tray.on('click', () => { // 我们这里模拟桌面程序点击通知区图标实现打开关闭应用的功能
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
    mainWindow.isVisible() ? mainWindow.setSkipTaskbar(false) : mainWindow.setSkipTaskbar(true)
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

const exeName = path.basename(process.execPath)
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
app.setLoginItemSettings({
  openAtLogin: true, // Boolean 在登录时启动应用
  openAsHidden: false, // Boolean (可选) mac 表示以隐藏的方式启动应用。~~~~
  path: process.execPath,
  args: [
    '--processStart', `"${exeName}"`
  ]
})
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
