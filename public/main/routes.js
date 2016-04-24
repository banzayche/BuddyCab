angular.module('BuddyCab').config(function($stateProvider){
	$stateProvider
	    .state('/', {
		    url: "/",
		    templateUrl: "partials/state1.html",
			templateUrl: 'public/templates/main.html',
			controller: 'MainController'
	    });
});