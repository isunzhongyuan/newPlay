// JavaScript Document
function setDiv(){
	var pics = document.getElementById("pics");	
	var showpic = document.createElement("div");
	showpic.setAttribute("id", "showpic");
	pics.appendChild(showpic);
	//showpic.appendChild(document.createElement("h2"));
	showpic.appendChild(document.createElement("img"));
	showpic.appendChild(document.createElement("div"));
	var delshow = document.createElement("div");
	delshow.setAttribute("id", "delshow");
	showpic.appendChild(delshow);
	var links = pics.getElementsByTagName("a");
	for(var k=0; k<links.length; k++){
	 links[k].onclick = function(){
	  return showPic(this);
	 }
	}
	delshow.onclick = function(){
	  showpic.style.display = "none";
	 }
  }
  function showPic(pic){
	var showpic = document.getElementById("showpic");
	showpic.style.display = "block";
	//showpic.getElementsByTagName("h2")[0].innerHTML = pic.title;
	showpic.getElementsByTagName("img")[0].setAttribute("src", pic.href);
	return false;
  }
  window.onload = setDiv;
 