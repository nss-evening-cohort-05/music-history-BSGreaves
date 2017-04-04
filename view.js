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
        let newSong = {};
        newSong.id = getID();
        console.log("new song ID", newSong.id)
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
    let outputString = "";
    array.forEach(function(each){
        outputString += `<article class='songdiv'><div><p class='songartistname songproperties'>`
        outputString += `${each.title} by ${each.artist} on the album ${each.album}`
        outputString += `</p></div><div class="delbuttondiv"><input type="button" value="Delete" class="delbutton" id="${each.id}"></div></article>`;
    });
    outputString += `<article class="morebuttondiv"><input type="button" value="More" class="morebutton"></article>`;
    outputDiv.innerHTML = outputString;
    delButtons = document.querySelectorAll(".delbutton");
    delButtons.forEach(function(each){
        each.addEventListener("click", function(e){
            deleteSong(e.target.id);
        });
    });
    moreButton = document.querySelector(".morebutton");
    moreButton.addEventListener("click", function(){
        loadJSON(getNextJSONFile());
    });
};

function deleteSong(id){
    songs.forEach(function(each, index){
        if (parseInt(each.id) === parseInt(id)) {
            songs.splice(index, 1);
        }
    });
    printToDOM(songs);
};

// On Page Load

var songs = [];
var outputDiv = document.getElementById("songdisplaydiv");
var idCounter = 0;

function parseJson() {
    let data = JSON.parse(this.responseText);
    data = data.songs;
    data.forEach(each => each.id = getID());
    data.forEach(each => songs.push(each));
    printToDOM(songs);
}

function getID () {
    var currID = idCounter;
    idCounter++;
    return currID;
}

function loadJSON(filepath) {
    if (filepath === undefined) {console.log("No more files to load")} //Hope this OK to leave in here.
    else {
        let songsJson = new XMLHttpRequest();
        songsJson.addEventListener("load", parseJson);
        songsJson.addEventListener("error", function(){console.log("JSON Error")});
        songsJson.open("GET", filepath);
        songsJson.send();
    }
}

function getNextJSONFile(){ // This function keeps track of all the JSON Files and makes sure it only loads files until it runs out of files.
    if (JSONList.length > numberFilesLoaded) { //That way, the only thing hard-coded is the JSONList
        currFile = numberFilesLoaded;
        numberFilesLoaded++;
        return JSONList[currFile];
    } else {
        return undefined;
    }
}

const JSONList = ["songs.json", "songs2.json"];
var numberFilesLoaded = 0;

loadJSON(getNextJSONFile());


