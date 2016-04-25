angular.module('BuddyCab')
	.controller('MainController', function(Subscriber, $scope, $state, $stateParams){
		$scope.subscribers = Subscriber.query();

		$scope.chooseItem = (item)=>{
			$state.go('item', {item: item.name});
		};
		// $scope.search = {};
	});