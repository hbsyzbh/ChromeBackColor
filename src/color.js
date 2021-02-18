//document.body.style.backgroundColor="#CCE8CC";

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.greeting == "yes") {
			$("*").not("button").css("background-color", "#CCE8CC");
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