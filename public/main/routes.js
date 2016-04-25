angular.module('BuddyCab').config(function($stateProvider){
	$stateProvider
	    .state('home', {
		    url: "/home",
			templateUrl: '/public/templates/main.html',
			controller: 'MainController'
	    })
	    .state('item', {
		    url: "/:item",
			templateUrl: '/public/templates/item.html',
			controller: 'UserController'
	    });
});