// bookmarklet.js
(function(){
  const selectedText = window.getSelection().toString().trim();
  window.location.href = 'https://translate.kagi.com/' + 
    (selectedText 
      ? '?text=' + encodeURIComponent(selectedText)
      : encodeURIComponent(window.location.href)
    );
})();
