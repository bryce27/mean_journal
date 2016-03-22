angular.module('JournalService', []).factory('Journal', ['$http', function($http) {

	var o = {

		entries : [

			{
				id: 1, title: 'First Day of School', date: 'Jan 01, 1994', content: 'Here is the content'
			},
			{
				id: 2, title: 'At the Zoo', date: 'July 06, 1995', content: 'I had a really fun time at the zoo'
			}

		]
    };

    function createEntry(entry){
    	return $http.post('/entries', entry).success(function(data){
    		o.entries.push(data);
  		});
    };

    function getAllEntries(){
    	return $http.get('/entries').success(function(data){
	      angular.copy(data, o.entries);
	    });
    }

    function getEntry(id){
    	return $http.get('/entries/' + id).then(function(res){
	    return res.data;
	  });
    }

    function deleteEntry(id){
        return $http.delete('/entries/' + id).then(function(res){
        return res.data;
      });
    }

    function getWeather(){
        return $http.get('https://api.wunderground.com/api/2fbe9dd598f2cfba/geolookup/conditions/q/UT/provo.json').success(function(data){
            return data;
        })
    }

    o.createEntry = createEntry;
    o.getAllEntries = getAllEntries;
    o.getEntry = getEntry;
    o.deleteEntry = deleteEntry;
    o.getWeather = getWeather;

    return o;

}]);