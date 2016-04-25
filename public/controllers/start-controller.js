angular.module('BuddyCab')
	.controller('StartController', function(Subscriber, $scope, $stateParams, $http, $state){
		// console.log('$stateParams', $stateParams);
		// $scope.subscribers = {};
		// $scope.saveNew = (subscribers)=>{
		// 	console.log(subscribers);
		// 	$http.post('/api/subscribers/new', subscribers)
		// 		.then(function mySucces(response) {
		// 	        console.log(response);
		// 	        $state.go('admin');
		// 	    });
		// };
		console.log('Sart here');
		$scope.auth = () => {
			window.location.href = "https://www.googleapis.com/auth/mail"
		};
	});