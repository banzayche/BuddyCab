angular.module('BuddyCab')
	.controller('UserController', function(Subscriber, $scope, $stateParams, $http, $state){
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

		$scope.saveNew = (subscribers)=>{
			console.log('PUT EVENT',subscribers);
			$http.put('/api/subscribers/'+subscribers.id, subscribers)
				.then(function mySucces(response) {
			        console.log(response);
			        $state.go('admin');
			    });
		};
	});