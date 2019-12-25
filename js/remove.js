function remove1(param1,param2){
	var cartHeader = document.getElementById(param1);
	var close = document.getElementById(param2);
	close.onclick=function(){
		cartHeader.parentNode.removeChild(cartHeader);
	}
}