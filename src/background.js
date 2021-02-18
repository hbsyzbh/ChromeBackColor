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


chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log(request, sender, sendResponse);
		if (sender.url.match("http://10.10.171.201/zentao/task-view-")) {
			return;
		}
		
		if(changeBackColorEnable)
			chrome.tabs.sendMessage(m_tabId,{greeting:'yes'});
	}
);