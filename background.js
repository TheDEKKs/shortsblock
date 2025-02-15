function blockShorts(tabId, changeInfo, tab) {
    const block = "youtube.com/shorts/";
    if (changeInfo.status === 'complete' && tab.url && tab.url.indexOf(block) !== -1) {
        chrome.tabs.remove(tabId);
    }
}

chrome.tabs.onUpdated.addListener(blockShorts);