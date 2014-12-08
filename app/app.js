'use strict';

// Declare app level module which depends on views, and components
angular.module('mytodoApp', [
  'ngRoute',
  'mytodoApp.view1',
  'mytodoApp.view2',
  'mytodoApp.version'
]).
angular.module('MytodoApp', [
  'MytodoApp.controllers'
]);
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
