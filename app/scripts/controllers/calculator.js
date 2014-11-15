'use strict';

angular.module('pocketCalculatorApp')
  .controller('CaculatorCtrl', function ($scope) {
    $scope.value = "";

    $scope.clearPress = function(){
      console.log("cleared everything");
    }

    $scope.pressValue = function(value){
      $scope.value = $scope.value + value;
      console.log($scope.value);
    }
});
