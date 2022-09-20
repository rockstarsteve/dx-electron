
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



