const fs = require("fs");
const { contextBridge, ipcRenderer } = require("electron");

console.log("process.platform", process.platform);

// fs.writeFile("./test.txt", "abc", () => {
//   console.log("创建并且写入了文件");
// });

//异步获取主进程回调信息
const handleSend = async () => {
  let fallback = await ipcRenderer.invoke("sendEvent", "my is renderer process ,where are you??");
  console.log(fallback)
};

contextBridge.exposeInMainWorld("myApi", {
  platform: process.platform,
  handleSend,
});
