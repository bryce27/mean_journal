angular.module('JournalCtrl', ['JournalService']).controller('JournalController', function($scope, Journal) {

	$scope.journalEntries = Journal.entries;

	// Functions ============================

	function deleteEntry(index){

		var entry_to_delete = $scope.journalEntries[index];

		Journal.deleteEntry(entry_to_delete._id).then(function(data){
			console.log('response',data);
			$scope.journalEntries.splice(index, 1);
		});

	}

	// Bind to scope =========================
	
	$scope.deleteEntry = deleteEntry;

});