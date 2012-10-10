(function(document) {
  document.addEventListener('click', function(evt) {
    if (evt.target.href.match(/.csv$/)) {
      evt.preventDefault();
      evt.stopPropagation();
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
