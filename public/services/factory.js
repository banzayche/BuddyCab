angular.module('BuddyCab').factory('Subscriber', function($resource){
	return $resource('/api/subscribers', {id: "@id"}, {
		update: {
			method: 'PUT'
		}
	});
});