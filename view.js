var songs = [];
var outputDiv = document.getElementById("songdisplaydiv");

// "View" Section

var viewLink = document.getElementById("view-link");
var viewSection = document.getElementById("view-section");

viewLink.addEventListener("click", displayView);

function displayView() {
    viewSection.classList.add("visible");
    viewSection.classList.remove("hidden");
    addSection.classList.add("hidden");
    addSection.classList.remove("visible");
};

// "Add" Section

var addLink = document.getElementById("add-link");
var addSection = document.getElementById("add-section");

addLink.addEventListener("click", displayAdd);

function displayAdd() {
    viewSection.classList.add("hidden");
    viewSection.classList.remove("visible");
    addSection.classList.add("visible");
    addSection.classList.remove("hidden");
};

var addSongField = document.getElementById("addSongField");
var addArtistField = document.getElementById("addArtistField");
var addAlbumField = document.getElementById("addAlbumField");
var addSongButton = document.getElementById("addSongButton");

addSongButton.addEventListener("click", addToSongList);

function addToSongList() {
    if (addSongField.value !== "" && addArtistField.value !== "" && addAlbumField.value !== "") {
        newSong = {}
        newSong.title = addSongField.value;
        newSong.artist = addArtistField.value;
        newSong.album = addAlbumField.value;
        songs.push(newSong);
        printToDOM(songs);
        displayView();
        addSongField.value = "";
        addArtistField.value = "";
        addAlbumField.value = "";
    }
};

function printToDOM(array) {
    outputString = "";
    for (let i = 0; i < array.length; i++) {
        outputString += `<article class='songdiv'><p class='songartistname songproperties'>`
        outputString += `${array[i].title} by ${array[i].artist} on the album ${array[i].album}`
        outputString += `</article></p>`;
    }
    outputDiv.innerHTML = outputString
};

// On Page Load

var songs = [];
var outputDiv = document.getElementById("songdisplaydiv");

function parseJson() {
    var data = JSON.parse(this.responseText);
    data = data.songs;
    data.forEach(each => songs.push(each))
    printToDOM(songs);
}

var songsJson = new XMLHttpRequest();
songsJson.addEventListener("load", parseJson);
songsJson.addEventListener("error", function(){console.log("JSON Error")});
songsJson.open("GET", "songs.json");
songsJson.send();
