//document.body.style.backgroundColor="#CCE8CC";

function getRGB(str){
	var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
	return match ? {
	  red: match[1],
	  green: match[2],
	  blue: match[3]
	} : {};
  }

var selector = "body,p,div,pre";

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.greeting == "yes") {
			if (request.replace) {
				var cmd = request.replace;
			} else {
				var cmd = "$(\"" + selector + "\")";
			}

			cmd += '.not(".disnone")';
			cmd += '.not("button").css("cssText", "background-color:#CCE8CC!important;");'
			eval(cmd);

			$(selector).not("button").not(function(index){ 
				var rgb = getRGB($(this).css("color"));

				return ! (( rgb.red > 240) && ( rgb.green > 240 ) && ( rgb.blue > 240));
			}).css("color", "black");
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