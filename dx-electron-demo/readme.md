
# electron
## electron依赖
初始化项目时候记得把用户和描述都加上内容！不然打包会出问题
1. 安装electron：yarn add --dev electron
2. package.json中的运行命令：
```
{
  "scripts": {
    "start": "electron ."
  }
}
```

## 打包
1. 安装打包依赖
yarn add --dev @electron-forge/cli
2. 打包命令
yarn run make

## 渲染进程获取主进程的内容
### 条件：
在BrowserWindow对象中的nodeIntegration设置为true（20版本的预加载脚本默认情况下是沙箱模式，不允许在preload中使用node模块）

contextBridge：这个对象可以使用contextBridge.exposeInMainWorld将对象挂载在window对象上



## 主进程获与染进程通讯（IPC）
- 主进程接收渲染进程的消息
  - 主进程：ipcMain
    - 同步：ipcMain.on()
    - 异步：ipcMain.handle() (推荐)
  - 渲染进程：ipcRenderer
    - 异步获取返回：ipcRenderer.invoke（）要配合async和await或者其他异步的形式来进行异步的操作。
    - 

## 第三方扩展
- electron-win-state： 管理BrowserWindow对象状态


## BrowserWindow.webContents的一些回调方法
使用win.webContents来监听一些回调方法



