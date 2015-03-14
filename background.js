
//example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     chrome.pageAction.show(sender.tab.id);
//     sendResponse();
//   });

angular.module('app', [])
  .run(function ($rootScope) {
    console.log('we\'re in the background y\'all', $rootScope);
    _ref = new Firebase('https://twrkr.firebaseio.com')
    $rootScope._ref = _ref;
    _ref.child('config').on('value', function (e) {
      // save the value as something that can be returned to a popup
      $rootScope.config = e.exportVal();
    });
  })
