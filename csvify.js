(function(document) {
  document.addEventListener('click', function(evt) {
    if (evt.target.href && evt.target.href.match(/\.csv$/)) {
      evt.preventDefault();
      evt.stopPropagation();
      // let's still update the browser url
      // For file:/// urls window.history.pushState leads to a silent error which prevents further execution so we need to wrap in if statement
      // try {
      //  window.history.pushState("", "", evt.target.href);
      //  window.addEventListener("popstate", function(e) {
      //    window.location.reload();
      //   });
      // } catch(e) {}
      chrome.extension.sendMessage({command: 'showCSV', url: evt.target.href}, function(response) {
      });
    }
  });
}(document));
