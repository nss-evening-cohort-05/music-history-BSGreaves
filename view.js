
var songs = [];
var outputDiv = document.getElementById("songdisplaydiv");

songs[songs.length] = "Sofi Needs a Ladder - by Deadmau5 on the album 4x4=12";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "The Package - by A Pefect Circle on the album Thirteenth Step";

function printToArray (array) {
	outputDiv.innerHTML = "";
	for (let i = 0; i < array.length; i++) {
		outputDiv.innerHTML += "<article class='songdiv'><p class='songartistname songproperties'>" + array[i] + "</article></p>";
	}
};

printToArray(songs);

// View Section

var viewLink = document.getElementById("view-link");
var viewSection = document.getElementById("view-section");

viewLink.addEventListener("click", function() {
  viewSection.classList.add("visible");
  viewSection.classList.remove("hidden");

  addSection.classList.add("hidden");
  addSection.classList.remove("visible");
});


// Add Section

var addLink = document.getElementById("add-link");
var addSection = document.getElementById("add-section");

addLink.addEventListener("click", function() {
  viewSection.classList.add("hidden");
  viewSection.classList.remove("visible");

  addSection.classList.add("visible");
  addSection.classList.remove("hidden");
});

var addSongField = document.getElementById("addSongField");
var addArtistField = document.getElementById("addArtistField");
var addAlbumField = document.getElementById("addAlbumField");	
var addSongButton = document.getElementById("addSongButton");	

addSongButton.addEventListener("click", addToSongList);

function addToSongList () {
	let currSong = addSongField.value;
	let currArtist = addArtistField.value;
	let currAlbum = addAlbumField.value;
	let newSong = `${currSong} - by ${currArtist} on album ${currAlbum}`;
	songs.push(newSong);
	printToArray(songs);
}
