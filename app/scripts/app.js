'use strict';

/**
 * @ngdoc overview
 * @name tirellamaApp
 * @description
 * # tirellamaApp
 *
 * Main module of the application.
 */
angular
  .module('tirellamaApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    //default path
    $urlRouterProvider.otherwise("/home");

    //define more paths by adding .state
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "views/main.html"
      })
      .state('about', {
        url: "/about",
        templateUrl: "views/about.html"
      })
      .state('contact', {
        url: "/contact",
        templateUrl: "views/contact.html"
      });
  });
