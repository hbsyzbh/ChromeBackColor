document.getElementById("doit").onclick=function(){
	chrome.extension.getBackgroundPage().doit();
	showText();
};

showText();

function showText()
{
	if (chrome.extension.getBackgroundPage().getEnable()) {
	//if (1) {
		document.getElementById("doit").innerText = "恢复";
	} else {
		document.getElementById("doit").innerText = "修改";
	}
}