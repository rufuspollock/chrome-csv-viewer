chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    if (info.url.indexOf('.csv') != -1) {
      return {
        cancel: true
      };
    }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);


