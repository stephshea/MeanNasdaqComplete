angular.module('meannasdaq').directive('mnNavigation', mnNavigation);

function mnNavigation() {
  return {
    transclude: true,
    restrict: 'E',
    //can only be used as an element
    templateUrl: 'angular-app/navigation-directive/navigation-directive.html'
  };
}

