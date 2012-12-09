(function(document) {
  var state = recline.View.parseQueryString(decodeURIComponent(window.location.search));
  chrome.extension.sendMessage({command: 'getData', url: state.url}, function(response) {
    document.body.innerHTML = '<pre>' + response + '</pre>';
  });
}(document));
