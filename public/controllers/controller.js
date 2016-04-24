angular.module('BuddyCab')
	.controller('MainController', function(Subscriber, $scope){
		$scope.subscribers = Subscriber.query();
		console.log($scope.subscribers);
		
		// $scope.search = {};
	});