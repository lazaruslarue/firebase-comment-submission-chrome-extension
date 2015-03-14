// console.debug('pop.js');
//
angular.module('twrkr', [])
  .run(function ($rootScope) {
    console.log('we\'re up y\'all', $rootScope);
    _ref = new Firebase('https://twrkr.firebaseio.com')
    $rootScope._ref = _ref;
  })
  .controller('twrkCtrl', _twrkCtrl)

function _twrkCtrl($scope, $location) {

  $scope.submission = {};
  $scope._ref.child('config').on('value', function (ds) {
    var apps = ds.exportVal();
    $scope.apps = apps;
    $scope.$apply();
  })
  // how to get the current URL
  $scope.getCurrentTabUrl = function getCurrentTabUrl(callback) {
    var queryInfo = {
      active: true,
      currentWindow: true
    };

    chrome.tabs.query(queryInfo, function (tabs) {
      var tab = tabs[0];
      var url = tab.url;
      console.assert(typeof url == 'string', 'tab.url should be a string');
      callback(url);
    });
  }
  // get the URL when you ca
  $scope.getCurrentTabUrl(function (url) {
    console.log('url', url);
    $scope.submission.pageurl = url;
    console.log('$scope.submission.pageurl ', $scope.submission.pageurl );
    $scope.$apply();
  })

  $scope.send = function send(sub) {
    var msg = {};

    
    // debugger;
    $scope._ref.child('comments').push(sub);
  }

}
