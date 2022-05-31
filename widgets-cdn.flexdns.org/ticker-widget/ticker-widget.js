(function() {
  var cacheOff = Date.now();
  var cdnUrl = 'https://widgets-cdn.flexdns.org/ticker-widget/';
  var main = `ticker-widget.main.js?cacheOff=${cacheOff}`;
  var polyfills = `ticker-widget.polyfills.js?cacheOff=${cacheOff}`;
  var polyfillsWc5 = `ticker-widget.polyfill-webcomp-es5.js?cacheOff=${cacheOff}`;
  var polyfillsWc = `ticker-widget.polyfill-webcomp.js?cacheOff=${cacheOff}`;
  var polyfillsEs5 = `ticker-widget.polyfills-es5.js?cacheOff=${cacheOff}`;

  function appendScript(cdnUrl, src, noModule) {
    var scriptElement = document.createElement('script');

    scriptElement.setAttribute('defer', '');
    scriptElement.src = cdnUrl + src;

    if (noModule) {
      scriptElement.setAttribute('nomodule', '');
    }

    (document.body || document.head).appendChild(scriptElement);
  }

  var appendFromCdn = function (src, noModule) { return appendScript(cdnUrl, src, noModule); }

  appendScript('', 'https://unpkg.com/@webcomponents/webcomponentsjs@2.4.3/custom-elements-es5-adapter.js');
  appendFromCdn(polyfillsEs5, true);
  appendFromCdn(polyfills);
  appendFromCdn(polyfillsWc5);
  appendFromCdn(polyfillsWc);
  appendFromCdn(main);
})();
