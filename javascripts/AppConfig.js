app.run(function(FIREBASE_CONFIG) {
	firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider) {
	$routeProvider
	.when("/songs/list", {
		templateUrl: "partials/song-display.html",
		controller: "SongDisplayCtrl"
	})
	.when("/songs/new",  {
		templateUrl: "partials/new-song.html",
		controller: "NewSongCtrl"
	})
	.when("/songs/edit/:id",  {
		templateUrl: "partials/new-song.html",
		controller: "EditSongCtrl"
	})
	.otherwise("songs/list");
});