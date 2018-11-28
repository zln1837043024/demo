function $id(id){
	return document.getElementById(id);
}
//banner轮播图
var ulist = document.getElementById("ulist").children;
var olist = document.getElementById("olist").children;
var index = 0;
var timer = null;
timer = setInterval( sport,1000 );
function sport(){
	index++;
	if(index == 6){
		index = 0;
	}
	//排他
	for( var i = 0 ; i < olist.length ; i++ ){
		olist[i].className = "";
	    startMove( ulist[i], 0 , "opacity" )	
	}
	//设置圆点和图片同步
	olist[index].className = "active";
	startMove( ulist[index], 100 , "opacity")
	
}
//移入移出按钮显示
$id("ulist").onmouseover = function(){
	$id("btn_left").style.display = "block";
	$id("btn_right").style.display = "block";	
}

$id("ulist").onmouseout = function(){
	$id("btn_left").style.display = "none";
	$id("btn_right").style.display = "none";	
}

