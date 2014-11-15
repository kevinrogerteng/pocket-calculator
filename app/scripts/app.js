'use strict';

/**
 * @ngdoc overview
 * @name pocketCalculatorApp
 * @description
 * # pocketCalculatorApp
 *
 * Main module of the application.
 */
angular
  .module('pocketCalculatorApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });