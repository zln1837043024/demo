//obj  代表 操作的元素
//target 代表 目标值  
//attr 代表 操作的样式
function startMove( obj ,target , attr ){
	clearInterval( obj.timer );
	obj.timer = setInterval( function(){
		var current = 0;//用于接收非行内元素样式值
		if( attr == "opacity" ){
			current = parseFloat( getStyle(obj,attr) ) * 100;
		}else{
			current = parseInt( getStyle(obj,attr) ) ;//获取元素的实际样式值
		}
		var speed = (target - current)/10;
		speed = speed>0?Math.ceil(speed) : Math.floor(speed);
		if( target === current ){
			clearInterval( obj.timer );
		}else{
			if( attr == "opacity" ){
				obj.style["opacity"] = (current + speed)/100;
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
	},30 )
}


//获取非行内元素样式值
//attr参数表示 样式属性
//obj  表示操作的元素
function getStyle(obj,attr){
	if( getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}