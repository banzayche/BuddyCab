angular.module('BuddyCab').config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'public/templates/main.html',
			controller: 'MainController'
		});
		// .when('/notes', {
		// 	templateUrl: '/public/templates/notes-index.html',
		// 	controller: 'NotesIndexController'
		// })
		
		// .when('/about', {
		// 	templateUrl: '/public/templates/about.html'
		// })

		// .when('/notes/new', {
		// 	templateUrl: '/public/templates/notes-new.html',
		// 	controller: 'NotesCreateController'
		// })
		
		// .when('/notes/:id', {
		// 	templateUrl: '/public/templates/notes-show.html',
		// 	controller: 'NotesShowController'
		// })
		
		// .when('/notes/:id/edit', {
		// 	templateUrl: '/public/templates/notes-edit.html',
		// 	controller: 'NotesEditController'
		// })

		// .otherwise({
  //       	redirectTo: '/'
  //     	}
      	// );
});