'use strict';

var LoginController = App.controller('LoginCtrl', [ 
	'$scope',
	'$http',
	'$timeout',
	'UserFactory',
	'$rootScope',
	function(
	  $scope,
	  $http,
	  $timeout,
	  UserFactory,
	  $rootScope
	  ){
	  
	  $scope.userData = UserFactory.getUserData();

	  $scope.userName = "";
	  $scope.userPassword = "";
	  $scope.invalid = false;

	  $scope.fieldIncompleted = function(){
	  	var name = $scope.userName;
	  	var pw = $scope.userPassword;
	  	return name == "" || pw == "";
	  }

	  //Authentication for login
	  $scope.auth = function(){
	  	
	  	var inputData = {
	  	  username: $scope.userName,
	  	  password: $scope.userPassword
	  	};

	  	UserFactory.userLogin(inputData);

	  	if(!$scope.userData.data.success){
	  		$scope.invalid = true;
	  		$scope.userName = "";
	  		$scope.userPassword = "";
	  	}
	  };

	  $rootScope.$on('user_update', function(){
        $scope.userData = UserFactory.getUserData();
      });

  	}]);