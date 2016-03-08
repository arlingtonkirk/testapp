(function () {
  'use strict';

  angular
    .module('mean.myTheme')
    .config(myTheme);

  myTheme.$inject = ['$stateProvider'];

  function myTheme($stateProvider) {
    $stateProvider.state('myTheme example page', {
      url: 'system/views/index.html',
      templateUrl: 'myTheme/views/index.html'
    });
  }
  


})();
