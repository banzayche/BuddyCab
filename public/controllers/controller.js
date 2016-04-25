angular.module('BuddyCab')
	.controller('MainController', function(Subscriber, $scope, $state, $stateParams, $http){
		$scope.subscribers = Subscriber.query();
		console.log($scope.subscribers)
		$scope.chooseItem = (item)=>{
			$state.go('item', {item: item.id});
		};

		$scope.deleteItem = (item)=>{
			console.log('Deleted');
			$http.delete('/api/subscribers/remove/'+item.id)
				.then(function mySucces(response) {
			        console.log(response);
			        $scope.subscribers = Subscriber.query();
			    });
		};
		// $scope.search = {};
	});