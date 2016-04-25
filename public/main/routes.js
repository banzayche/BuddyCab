angular.module('BuddyCab').config(function($stateProvider){
	$stateProvider
	    .state('home', {
		    url: "/home",
			templateUrl: '/public/templates/main.html',
			controller: 'MainController'
	    })
	    .state('new', {
		    url: "/new",
			templateUrl: '/public/templates/item.html',
			controller: 'NewController'
	    })
	    .state('item', {
		    url: "/:item",
			templateUrl: '/public/templates/item.html',
			controller: 'UserController'
	    });
});