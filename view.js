
var songs = [];
var outputDiv = document.getElementById("songdisplaydiv");

songs[songs.length] = "Sofi Needs a Ladder - by Deadmau5 on the album 4x4=12";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "The Package - by A Pefect Circle on the album Thirteenth Step";

function printToArray (array) {
	for (let i = 0; i < array.length; i++) {
		outputDiv.innerHTML += "<article class='songdiv'><p class='songartistname songproperties'>" + array[i] + "</article></p>";
	}
};

printToArray(songs);

var viewLink = document.getElementById("view-link");
var viewSection = document.getElementById("view-section");

viewLink.addEventListener("click", function() {
  viewSection.classList.add("visible");
  viewSection.classList.remove("hidden");

  addSection.classList.add("hidden");
  addSection.classList.remove("visible");
  console.log("View Clicked");
});


