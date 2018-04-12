document.getElementById("doit").onclick=function(){
	chrome.extension.getBackgroundPage().doit();
};
