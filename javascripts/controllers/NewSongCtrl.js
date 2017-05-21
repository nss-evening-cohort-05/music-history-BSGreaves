app.controller("NewSongCtrl", function($location, $scope, SongFactory) {

	$scope.newSong = {};

	$scope.saveNewSong = () => {
		SongFactory.postNewSong($scope.newSong)
		.then(() => {$location.url("/songs/list"); $scope.newSong = {};})
		.catch(error => console.log("Error in SaveNewSong", error));
	};

});