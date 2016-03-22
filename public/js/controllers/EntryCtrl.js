angular.module('EntryCtrl', ['JournalService']).controller('EntryController', function($scope, $routeParams, $location, $filter, Journal, entry, weather) {

	// if the id is in the url, then we are just reading the entry, so get it from the journal service
	// if ($routeParams.entryId){
	// 	$scope.entry = $filter('filter')(Journal.entries, {id: $routeParams.entryId })[0];
	// }
	// if (entry == undefined){
	// 	$scope.entry = entry;
	// }
  $scope.entry = entry;
  if (weather != undefined){
      $scope.weather_icon = weather.data.current_observation.icon_url;
      $scope.temp = weather.data.current_observation.temp_f;
  }
  $scope.shouldSaveWeather = false;


	// FUNCTIONS
	
	function addEntry() {
        if (!$scope.entry.title || $scope.entry.title === "") {
          return;
        }

        var currSize = Journal.entries.length;

        if ($scope.shouldSaveWeather){

          Journal.createEntry({
            id: currSize+1,
            title: $scope.entry.title,
            date: $scope.entry.date,
            content: $scope.entry.content,
            weather_icon: $scope.weather_icon,
            temp: $scope.temp
          });

        }

        else {
          Journal.createEntry({
            id: currSize+1,
            title: $scope.entry.title,
            date: $scope.entry.date,
            content: $scope.entry.content,
            weather_icon: null,
            temp: null
          });
        }

        $scope.entry.title = "";
        $scope.entry.content = "";
        $scope.entry.date = "";

        $location.path('/');
    }

    function addWeather(){
      $scope.shouldSaveWeather = true;
      // change plus to a checkmark to signify that you added it
    }


    // BIND TO SCOPE

    $scope.addEntry = addEntry;


});