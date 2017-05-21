app.controller("EditSongCtrl", function($scope, $routeParams, $location, SongFactory) {

	$scope.newSong = {};

	SongFactory.fetchSingleSong($routeParams.id)
	.then(result => {console.log(result); $scope.newSong = result;})
	.catch(error => console.log("error in getSingleItem", error));

	$scope.saveNewSong = () => {
		SongFactory.editSong($scope.newSong).then(() => {
			$scope.newSong = {};
			$location.url("/songs/list");
		}).catch(error => console.log("error in editSong in EditSongCtrl", error));
	};

});