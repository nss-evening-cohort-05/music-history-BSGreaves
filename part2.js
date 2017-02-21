
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

