// Use JavaScript arrays, loops, and innerHTML to show the music you love.

// Students must use JavaScript to create a list of songs in the index.html file
// for their Music History project. Have them download the songs.js file, which
// contains an array of strings with song information.

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.

var songs = [];
var outputDiv = document.getElementById("songdisplaydiv");

songs[songs.length] = "Sofi Needs a Ladder - by Deadmau5 on the album 4x4=12";
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
songs[songs.length] = "The Package - by A Pefect Circle on the album Thirteenth Step";

function cleanUp (array) {
	for (let i = 0; i < array.length; i++) {
		array[i] = array[i].replace("*", "").replace("@", "").replace("(", "").replace("!", "").replace(">", "-");
	}
	printToArray(array);
};

function printToArray (array) {
	for (let i = 0; i < array.length; i++) {
		outputDiv.innerHTML += "<article class='songdiv'><p class='songartistname songproperties'>" + array[i] + "</article></p>";
	}
};

cleanUp(songs);

