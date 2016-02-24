'use strict';

var EventController = App.controller('EventCtrl', [
	'$scope',
	'$http',
	function($scope, $http){

  	  $scope.showEarthquakeTxt = false;
  	  $scope.showFloodTxt = false;
      $scope.showHurricaneTxt = false;

  	  $scope.earthquakeToggle = function(){
  		$scope.showEarthquakeTxt = !$scope.showEarthquakeTxt;
  	  }

	  $scope.floodToggle = function(){
	  	$scope.showFloodTxt = !$scope.showFloodTxt;
	  }

	  $scope.hurricaneToggle = function(){
	  	$scope.showHurricaneTxt = !$scope.showHurricaneTxt;
	  }

	  $scope.enterMap = function(eventId){
	  	var path = '/event/' + eventId;
	  }

}]);