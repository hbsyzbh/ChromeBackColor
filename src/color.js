//document.body.style.backgroundColor="#CCE8CC";

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.greeting == "yes") {
			if (request.replace) {
				var cmd = request.replace + '.css("cssText", "background-color:#CCE8CC!important;");';
				eval(cmd);
			} else {
				$("*").not("button").css("cssText", "background-color:#CCE8CC!important;");
			}
			$("*").not(function(index){ return ($(this).css("color") != "rgb(255, 255, 255)")}).css("color", "black");
		} else {
			window.location.reload(true);
		}
	}
);

chrome.extension.sendMessage({greeting:'hello'})

//$("tbody").css("background-color", "#CCE8CC");
// for (a in $("tr"))
// {
	// if (a.css.background-color == "#FFFFFF")
	// {
		// a.css.background-color = "#CCE8CC";
	// }
// }