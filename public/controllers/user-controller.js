angular.module('BuddyCab')
	.controller('UserController', function(Subscriber, $scope, $stateParams, $http){
		console.log('$stateParams', $stateParams);
		$scope.subscribers;
		$http({
		  method: 'GET',
		  url: '/api/subscribers/'+$stateParams.item
		}).then((response) => {
		    $scope.subscribers = response.data[0];
			console.log($scope.subscribers);
		  }, (response) => {
		  	console.log('error');
		});
	});