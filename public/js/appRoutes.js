angular.module('appRoutes', ['JournalService']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider, Journal) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/entries.html',
			controller: 'JournalController',
			resolve: {
			    entries: function(Journal){
			      return Journal.getAllEntries();
			    }
			}
		})

		.when('/entries/:entryId', {
			templateUrl: 'views/entry.html',
			controller: 'EntryController',
			resolve: {
			    entry: function($route, Journal) {
			      return Journal.getEntry($route.current.params.entryId);
			    },
			    weather: function(){
			    	return null;
			    }
			}
		})

		.when('/newentry', {
			templateUrl: 'views/newentry.html',
			controller: 'EntryController',
			resolve: {
			    entry: function($route, Journal) {
			      return {title: 'My Great Day', date: new Date().toDateString(), content: "Man. I just had a bucket of fun today, like."};
			    },
			    weather: function(Journal){
			    	return Journal.getWeather();
			    }
			}
		})

	$locationProvider.html5Mode(true);

}]);