'use strict';

/**
 * @ngdoc function
 * @name tirellamaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tirellamaApp
 */
angular.module('tirellamaApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.years = [
      '2016',
      '2015',
      '2014',
      '2013',
      '2012',
      '2011',
    ];

    $scope.makes = [
      'Ford',
      'Honda'
    ];

    $scope.models = [
      'Escort ZX2',
      'CRV'
    ];

  }]);
