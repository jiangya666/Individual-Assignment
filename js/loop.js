// 在当前列表后追加复制一份，使列表长度变为当前2倍
// 获取list列表
var olist = document.getElementById("list");
// 获取li数组
var liArr = document.querySelectorAll("#list>li");
// 新建一个变量接收新节点
var newLiNode = null;
// 遍历li数组，依次复制li，并挂载到父节点上
for (var i = 0; i < liArr.length; i++) {
  // 复制节点
  newLiNode = liArr[i].cloneNode(true);
  // 挂载在父节点上
  olist.appendChild(newLiNode);
}

// 定义一个全局变量的定时器
var timer = null;
// 定义一个全局变量的left值
var moveLeft = 0;

// 声明滚动函数move，不传参，内部变量使用全局变量moveLeft
function move() {
  timer = setInterval(function () {
    // 当跑完一轮时，重置位置
    if (moveLeft === -1040) {
      moveLeft = 0;
    }
    moveLeft -= 5;
    // 设置列表每20毫秒左移5px
    olist.style.left = moveLeft + "px";
  }, 20);
}

// 加载页面时调用该滚动函数
move();

// 鼠标移入清清除定时器
olist.onmouseenter = function () {
  clearInterval(timer);
};
// 鼠标移出，调用move重新开启定时器
olist.onmouseleave = function () {
  move();
};
