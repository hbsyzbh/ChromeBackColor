var changeBackColorEnable = 1;

var m_tabId;
chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo,tab) {
		console.log(tabId);
		m_tabId = tabId;
	}
);

function doit()
{
	changeBackColorEnable = ! changeBackColorEnable;
	chrome.tabs.sendMessage(m_tabId,{doit:'yes'});
}

chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(request.greeting);
		if(changeBackColorEnable)
			chrome.tabs.sendMessage(m_tabId,{greeting:'yes'});
	}
);