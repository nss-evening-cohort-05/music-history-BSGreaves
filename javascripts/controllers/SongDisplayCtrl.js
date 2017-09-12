app.controller("SongDisplayCtrl", function($scope, SongFactory) {

	$scope.songs = [];

	let displaySongs = () => {
		SongFactory.fetchAllSongs()
		.then(songs => $scope.songs = songs)
		.catch(error => console.log("error in displaySongs", error));
	};

	$scope.deleteSong = id => {
		SongFactory.deleteSong(id)
		.then(() => displaySongs())
		.catch(error => console.log("error in deleteSong", error));
	};

	displaySongs();

});