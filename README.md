# dx-electron
electron学习项目

## yarn

- 升级依赖：

  ```
  1:
  # 先下载
  yarn global add npm-check-updates
  # 更新包（yarn.lock和package.json同步更新）
  ncu --upgrade --upgradeAll && yarn upgrade
  
  2:
  yarn upgrade-interactive --latest
  # 需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择
  
  3:
  yarn upgrade package@version
  # yarn.lock和package.json都会更新，但是会进行版本锁定 "echarts": "4.2.0-rc.2"
  
  
  ```

  



## dx-electron-demo





