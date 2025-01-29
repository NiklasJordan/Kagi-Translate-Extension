// background.js
// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translateSelection",
    title: "Translate with Kagi",
    contexts: ["selection"]
  });
});

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "translateSelection" && info.selectionText) {
    const url = 'https://translate.kagi.com/?text=' + 
      encodeURIComponent(info.selectionText);
    chrome.tabs.create({ url: url });
  }
});

// Handle toolbar button clicks
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['bookmarklet.js']
  });
});
