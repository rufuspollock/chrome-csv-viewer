(function(document) {
  document.addEventListener('click', function(evt) {
    if (evt.target.href && evt.target.href.match(/.csv$/)) {
      evt.preventDefault();
      evt.stopPropagation();
      // let's still update the browser url
      // For file:/// urls window.history.pushState leads to a silent error which prevents further execution so we need to wrap in if statement
      try {
        window.history.pushState("", "", evt.target.href);
      } catch(e) {}
      // now load the CSV and display it
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        try {
          document.body.innerHTML = '<pre>' + xhr.responseText + '</pre>';
        } catch (e) {
          console.log(e);
          console.error(e);
        }
      };
      xhr.open('GET', evt.target.href, true);
      xhr.send();
    }
  });
}(document));
