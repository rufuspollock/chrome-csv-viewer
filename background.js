chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  // dispatch based on command
  if (request.command == 'showCSV') {
    chrome.tabs.create({ 
      url: chrome.extension.getURL('viewer.html')
        + "?url=" + request.url
    });
  } else if (request.command == 'getData') {
    getData(request.url, sendResponse); 
    return true;
  }
});

function getData(url, cb) {
  // now load the CSV and display it
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    try {
      if (xhr.readyState === 4) {
        cb(xhr.responseText);
      }
    } catch (e) {
      console.log(e);
      console.error(e);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
}
