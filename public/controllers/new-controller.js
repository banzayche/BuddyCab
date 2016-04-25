angular.module('BuddyCab')
	.controller('NewController', function(Subscriber, $scope, $stateParams, $http, $state){
		console.log('$stateParams', $stateParams);
		$scope.subscribers = {};
		$scope.saveNew = (subscribers)=>{
			console.log(subscribers);
			$http.post('/api/subscribers/new', subscribers)
				.then(function mySucces(response) {
			        console.log(response);
			        $state.go('home');
			    });
		};
		// $http({
		//   method: 'POST',
		//   url: '/api/subscribers/'+$stateParams.item
		// }).then((response) => {
		//     $scope.subscribers = response.data[0];
		// 	console.log($scope.subscribers);
		//   }, (response) => {
		//   	console.log('error');
		// });
	});