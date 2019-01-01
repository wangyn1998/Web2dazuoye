//容量背景对勾
var ml = document.getElementById('ml');
var mll = ml.children;
var choose = document.getElementById('choose');
mll[0].onclick = function(){
	mll[0].setAttribute ("class","back");
	mll[1].setAttribute ("class","main_right_c2");
	choose.innerHTML =  '"150ml"';
}
mll[1].onclick = function(){
	mll[1].setAttribute ("class","back");
	mll[0].setAttribute ("class","main_right_c2");
	choose.innerHTML =  '"200ml"';
}
//加减数量
var l =document.getElementById('l');
var m =document.getElementById('m');
var r =document.getElementById('r');
l.onclick = function(){
	if(m.value > 1){
		m.value --;
		l.style.cursor = "pointer";
	}
	 else{
	 	l.style.cursor = "no-drop";
	 }
}
r.onclick = function(){
	if(m.value < 5){
		m.value ++;
		r.style.cursor = "pointer";
	}
	else{
		r.style.cursor = "no-drop";
	}
}
//滑动改变图片
var ima = document.getElementById('ima');
var simg1 = document.getElementById('simg1');
var simg2 = document.getElementById('simg2');
var big = document.getElementById('Bimg');
simg1.style.border = '2px solid #ff9003';
simg1.onmousemove = function(){
	ima.src = "img/pp0.jpeg";
	big.src = "img/pp0.jpeg";
	simg1.style.border = '2px solid #ff9003';
	simg2.style.border = 'none';
}
simg2.onmousemove = function(){
	ima.src = "img/pp1.jpeg";
	big.src = "img/pp1.jpeg";
	simg2.style.border = '2px solid #ff9003';
	simg1.style.border = 'none';
}
//按钮改变图片
var spanl = document.getElementById('spanl');
var spanr = document.getElementById('spanr');
spanr.onclick = function(){
	ima.src = "img/pp1.jpeg";
	simg2.style.border = '2px solid #ff9003';
	simg1.style.border = 'none';
}
spanl.onclick = function(){
	ima.src = "img/pp0.jpeg";
	simg1.style.border = '2px solid #ff9003';
	simg2.style.border = 'none';
}
//放大镜
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var slider = document.getElementById("slider");
var Bimg = document.getElementById("Bimg");
var box = document.getElementById('box');
img1.onmouseover = function () {
	box.style.width = 816 + 'px';
	slider.style.display = 'block';
	img2.style.display = 'block';
}
img1.onmouseout = function () {
	box.style.width = 408 + 'px';
	slider.style.display = 'none';
	img2.style.display = 'none';
}

img1.onmousemove = function (ev) {
	var ev = ev || window.event;

	var st = document.documentElement.scrollTop || document.body.scrollTop;
	var oL = ev.clientX - box.offsetLeft - slider.offsetWidth / 2;
	var oT = ev.clientY - box.offsetTop - slider.offsetHeight / 2 + st;

	var oMaxw = img1.offsetWidth - slider.offsetWidth;
	var oMaxh = img1.offsetHeight - slider.offsetHeight;

	oL = oL > oMaxw ? oMaxw : oL < 0 ? 0 : oL;
	oT = oT > oMaxh ? oMaxh : oT < 0 ? 0 : oT;

	slider.style.left = oL + 'px';
	slider.style.top = oT + 'px';

	var scale = img2.offsetWidth / slider.offsetWidth;
	var oBmaxw = img2.offsetWidth - Bimg.offsetWidth; 
	var oBmaxh = img2.offsetHeight - Bimg.offsetHeight; 
	Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px';
	Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px';

}
//蒙罩
var bc = document.getElementById('bc');
var shopping=document.getElementById('shopping');
var x=document.getElementById('x');
var con =document.getElementById('continue');
id18.onclick=function(){
	shopping.style.display='block';
	bc.style.display = 'block';
}
x.onclick=function(){
	shopping.style.display='none';
}
con.onclick=function(){
	shopping.style.display='none';
}

