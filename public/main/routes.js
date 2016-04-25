angular.module('BuddyCab').config(function($stateProvider){
	$stateProvider
	    .state('home', {
		    url: "/home",
			templateUrl: '/public/templates/main.html',
			controller: 'MainController'
	    })
	    .state('item', {
		    url: "/:item",
			templateUrl: '/public/templates/main.html',
			controller: 'UserController'
	    })
	    .state('redirect', {
		    url: "/",
		    templateUrl: '/public/templates/main.html',
		    redirectTo: "home"
	    });
});