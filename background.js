// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
    // If the tabs url starts with "http://specificsite.com"...
    if (tab.url.indexOf('http://tieba.baidu.com') == 0) {
        // ... show the page action.
        chrome.pageAction.show(tabId);
    }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);

var filters = [
    /http:\/\/image.cache.xiu8.com.+/,
    /http:\/\/ubmcmm.baidustatic.com.+/
]


chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
      var cancel = false,
          url = details.url;

      for (var i = 0; i < filters.length; i++) {
          if (filters[i].test(url)) {
              cancel = true;
              break;
          }
      }
      //if (cancel)
      //    console.log(url, cancel);
      //console.log("webRequest", arguments);/http:\/\/image.cache.xiu8.com.+/.test(details.url)
      return { cancel: cancel };
  },
  {
      urls: ["<all_urls>"]
  },
  ["blocking"]
);


