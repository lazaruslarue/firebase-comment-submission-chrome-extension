(function () {
  Rx.Observable.$watch = function (scope, watchExpression, objectEquality) {
    return Rx.Observable.create(function (observer) {
      // Create function to handle old and new Value
      function listener (newValue, oldValue) {
        observer.onNext({ oldValue: oldValue, newValue: newValue });
      }
      // Returns function which disconnects the $watch expression
      return scope.$watch(watchExpression, listener, objectEquality);
    });
  };
})();

/** Usage: per https://xgrommx.github.io/rx-book/content/how_do_it/angular_with_rxjs.html#integration-with-scopes
*  // Get the scope from somewhere
*  var scope = $rootScope;
*  scope.name = 'Reactive Extensions';
*  scope.isLoading = false;
*  scope.data = [];
*  // Watch for name change and throttle it for 1 second and then query a service
*  Rx.Observable.$watch(scope, 'name')
*      .throttle(1000)
*      .map(function (e) {
*          return e.newValue;
*      })
*      .do(function () {
*          // Set loading and reset data
*          scope.isLoading = true;
*          scope.data = [];
*      })
*      .flatMapLatest(querySomeService)
*      .subscribe(function (data) {
*          // Set the data
*          scope.isLoading = false;
*          scope.data = data;
*      });
*
*/
