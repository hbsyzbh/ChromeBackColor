var changeBackColorEnable = 1;

var m_tabId;
chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo,tab) {
		m_tabId = tabId;
	}
);

function doit()
{
	changeBackColorEnable = ! changeBackColorEnable;
	chrome.tabs.sendMessage(m_tabId,{doit:'yes'});
}

function getEnable()
{
	return changeBackColorEnable;
}

var filters = [
	{
		regexp: "http://10.10.171.201/zentao/task-view-",
		replace: '$("div").not(".main-actions")'
	},
	{
		regexp: "http://mail.galachip.com/",
		notchange :true
	},
];

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(request, sender, sendResponse);

		if(changeBackColorEnable) {

			for(var index = 0;index < filters.length;index++){
				if (sender.url.match(filters[index].regexp)) {
					if (filters[index].notchange != true) { 
						var replace = filters[index].replace;
						chrome.tabs.sendMessage(m_tabId,{greeting:'yes', replace});
					}
					return;
				}
			}

			chrome.tabs.sendMessage(m_tabId,{greeting:'yes'});
		}

	}
);