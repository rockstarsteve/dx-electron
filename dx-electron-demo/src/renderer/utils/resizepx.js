/**
 * 自适应代码
 * @param designWidth 设计稿的宽度
 * @param ratio 缩小比列   如是100，那么1rem = 100px
 */

var designWidth = 1080, ratio = 100;
var innerWidth = window.innerWidth || document.body && document.body.clientWidth ? document.body.clientWidth : 0;

document.documentElement.style.fontSize = (innerWidth / designWidth) * ratio + "px";

window.onresize = () => {
  innerWidth = window.innerWidth || document.body && document.body.clientWidth ? document.body.clientWidth : 0;
  document.documentElement.style.fontSize = (innerWidth / designWidth) * ratio + "px";
  //恢复body的文本尺寸
  document.body.style.fontSize = '16px';
};

//恢复body的文本尺寸
document.body.style.fontSize = '16px';
