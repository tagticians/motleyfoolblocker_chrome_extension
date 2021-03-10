chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.icontextupdate == true)
      var articleNumber = request.number;
      chrome.browserAction.setBadgeText({text: articleNumber.toString()});
  }
);  