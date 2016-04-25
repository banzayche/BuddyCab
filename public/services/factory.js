angular.module('BuddyCab').factory('Subscriber', function($resource){
	return $resource('/api/subscribers/:item', {item: "@item"}, {
		update: {
			method: 'PUT'
		}
	});
});