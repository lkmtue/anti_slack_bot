(function () {
  var observeDOM = (function () {
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
        eventListenerSupported = window.addEventListener;
    return function (obj, callback) {
      if (MutationObserver) {
        var obs = new MutationObserver(function (mutations, observer) {
          if (mutations[0].addedNodes.length || mutations[0].removedNodes.length)
          callback();
        });
        obs.observe(obj, { childList:true, subtree:true });
      } else if (eventListenerSupported) {
        obj.addEventListener('DOMNodeInserted', callback, false);
        obj.addEventListener('DOMNodeRemoved', callback, false);
      }
    };
  })();

  var removeAllMessagesFromBot = function() {
    var nodes = document.getElementsByClassName('bot_message');
    var i;
    for (i = 0; i < nodes.length; i++) {
        nodes[i].remove();
    }
  }

  observeDOM(document.body, function () {
    removeAllMessagesFromBot();
  });

  removeAllMessagesFromBot();
 })();

