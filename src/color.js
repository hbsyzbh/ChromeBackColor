//document.body.style.backgroundColor="#CCE8CC";

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.greeting == "yes") {
			$("body").css("background-color", "#CCE8CC");
			$("p").css("background-color", "#CCE8CC");
			$("div").css("background-color", "#CCE8CC");
			$("pre").css("background-color", "#CCE8CC");			
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