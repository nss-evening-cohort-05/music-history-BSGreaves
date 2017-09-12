app.factory("SongFactory", function($q, $http, FIREBASE_CONFIG) {

	let fetchAllSongs = () => {
		let finalSongs = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/songs.json`)
			.then(fbSongs => {
				fbSongs = fbSongs.data;
				if (fbSongs !== null) {
		      Object.keys(fbSongs).forEach(key => {
		        fbSongs[key].id = key;
		        finalSongs.push(fbSongs[key]);
		      });
				}
				resolve(finalSongs);
			})
			.catch(error => reject(error));
		});
	};

	let fetchSingleSong = id => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/songs/${id}.json`)
			.then(fbSong => {
				fbSong = fbSong.data;
				fbSong.id = id;
		    resolve(fbSong);
			})
			.catch(error => reject(error));
		});
	};

	let postNewSong = newSong => {
		return $q((resolve, reject) => {
			$http.post(`${FIREBASE_CONFIG.databaseURL}/songs.json`, JSON.stringify(newSong))
			.then(result => resolve(result))
			.catch(error => reject(error));
		});
	};

	let deleteSong = id => {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/songs/${id}.json`)
			.then(result => resolve(result))
			.catch(error => reject(error));
		});
	};

	let editSong = song => {
		let songID = song.id;
		delete song.id;
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/songs/${songID}.json`,
				JSON.stringify(song))
			.then(result => resolve(result))
			.catch(error => reject(error));
		});
	};

	return {fetchAllSongs: fetchAllSongs, postNewSong:postNewSong, fetchSingleSong: fetchSingleSong, editSong: editSong, deleteSong: deleteSong};
});