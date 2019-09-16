chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.storage.sync.get({
      OHCount: 0
    }, function(items) {
      if (items.OHCount == 0 && request.OHCount != 0) {
        sendDesktop(request.message);
      }
    });
    chrome.storage.sync.set({
    OHCount: request.OHCount
  }, function() {
  });
});

function sendDesktop(message) {
  var options = {
      type: "basic",
      title: "2150 OH Ext",
      iconUrl: "pic2.jpg",
      message: message
    };
    chrome.notifications.clear("0");
    chrome.notifications.create("0", options);
}