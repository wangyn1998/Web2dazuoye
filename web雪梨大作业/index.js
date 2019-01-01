//悬浮
window.onload=function(){
    var cover=document.getElementsByClassName("all")[0];
    window.onscroll=function(){
    var st=document.documentElement.scrollTop;
      if(st>100){
        cover.style.position="fixed";
    }   
    else{
        cover.style.position="static";
      }
    }
  }
//中心轮播
var box = document.getElementById('box');
var slider = document.getElementById('slider');
var left = document.getElementById('lefta');
var right = document.getElementById('righta');
var oNavlist = document.getElementById('list').children;
var index = 1; //打开页面生效的图片的下标为1
var timer;
var isMoving = false;
box.onmouseover = function () {
  animate(left, {
    opacity: 0.6
  })
  animate(right, {
    opacity: 0.6
  })
  clearInterval(timer); //图片停止滚动
}
box.onmouseout = function () {
  animate(left, {
    opacity: 0
  })
  animate(right, {
    opacity: 0
  })
  timer = setInterval(next, 3000); //图片开始接着滚动
}
right.onclick = next;
left.onclick = prev;

function next() {
  if (isMoving) {
    return;
  }
  isMoving = true;
  index++;
  navmove();
  animate(slider, {
    left: -800 * index
  }, function () {
    if (index == 7) {
      slider.style.left = '-800px';
      index = 1;
    }
    isMoving = false;
  });
}

function prev() {
  if (isMoving) {
    return;
  }
  isMoving = true;
  index--;
  navmove();
  animate(slider, {
    left: -800* index
  }, function () {
    if (index == 0) {
      slider.style.left = '-4800px';
      index = 6;
    }
    isMoving = false;
  });
}
//按钮点击切换事件
for (var i = 0; i < oNavlist.length; i++) {
  oNavlist[i].index = i;
  oNavlist[i].onclick = function () {
    index = this.index + 1;
    navmove();
    animate(slider, {
      left: -800 * index
    });
  }

}
//图片切换时按钮样式跟着切换
function navmove() {
  for (var i = 0; i < oNavlist.length; i++) {
    oNavlist[i].className = "";
  }
  if (index > 6) {
    oNavlist[0].className = "active";
  } else if (index <= 0) {
    oNavlist[6].className = "active";
  } else {
    oNavlist[index - 1].className = "active";
  }
}
//页面打开时自动滚动切换
timer = setInterval(next, 2000);

function getStyle(obj, attr) { //返回值带有单位px
if (obj.currentStyle) {
  return obj.currentStyle[attr];
}
 else {
  return getComputedStyle(obj, null)[attr];
}
}

function animate(obj, json, callback) {
clearInterval(obj.timer);
obj.timer = setInterval(function () {
  var flag = true;
  for (var attr in json) {
    (function (attr) {
      if (attr == "opacity") {
        var now = parseInt(getStyle(obj, attr) * 100);
        var dest = json[attr] * 100;
      } else {
        var now = parseInt(getStyle(obj, attr));
        var dest = json[attr];
      }
      var speed = (dest - now) / 6;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if (now != dest) {
        flag = false;
        if (attr == "opacity") {
          obj.style[attr] = (now + speed) / 100;
        } else {
          obj.style[attr] = now + speed + "px";
        }
      }
    })(attr);
  }
  if (flag) {
    clearInterval(obj.timer);
    callback && callback(); //如果回调函数存在，就调用回调函数
  }
}, 30);
}
//左侧轮播
//ul动起来
        var ul = document.getElementById("ul");
        console.log(ul.getBoundingClientRect())
        console.log(ul.offsetHeight)
        console.log(ul.offsetWidth)
        console.log(ul.offsetLeft)
        console.log(ul.offsetTop)

        function show() {
            var top = ul.offsetTop - 1; //获取left值
            ul.style.top = top + "px"; //设置left值

            //走完一半再返回
            if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {
                ul.style.top = 0;
            }
        }
        var t = setInterval(show, 10);

        //li添加鼠标移入移出事件
        var li = document.getElementsByTagName("li");
        for (var i = 0; i < li.length; i++) {
            //移出事件
            li[i].onmouseout = function () {
                //不能加 var
                t = setInterval(show, 10);

            };
            //移入事件
            li[i].onmouseover = function () {
                clearInterval(t);
            };
        }
//充值
var select = document.getElementById('select');
select.onchange = function(){
  var money = document.getElementById('money');
  money.innerHTML = "￥" + select.value ;
}
//右侧弹出 弹一弹
var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var fourth = document.getElementById('fourth');
var denglu = document.getElementById('denglu');
var erwei = document.getElementById('erwei');
first.onmouseover = function(){
  first.style.width = 100 + 'px';
}
first.onmouseout = function(){
  first.style.width = 44 + 'px';
}
second.onmouseover = function(){
  second.style.width = 100 + 'px';
  denglu.style.display = 'block';
}
second.onmouseout = function(){
  second.style.width = 44 + 'px';
  denglu.style.display = 'none';
}
third.onmouseover = function(){
  third.style.width = 100 + 'px';
  erwei.src = 'img/erwei.png';
  erwei.setAttribute('class','bigerwei');
}
third.onmouseout = function(){
  third.style.width = 44 + 'px';
  erwei.src = 'img/serwei.png';
  erwei.setAttribute('class','smallerwei');
}
fourth.onmouseover = function(){
  fourth.style.width = 100 + 'px';
}
fourth.onmouseout = function(){
  fourth.style.width = 44 + 'px';
}