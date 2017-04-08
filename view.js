var songs = [];
var $outputDiv = $("#songdisplaydiv");

// "View" Section

var $viewLink = $("#view-link");
var $viewSection = $("#view-section");

$viewLink.click(function(){
    displayView();
});

function displayView() {
    $viewSection.addClass("visible").removeClass("hidden");
    $addSection.addClass("hidden").removeClass("visible");
};

// "Add" Section

var $addLink = $("#add-link");
var $addSection = $("#add-section");

$addLink.click(function(){
    displayAdd();
});

function displayAdd() {
    $addSection.addClass("visible").removeClass("hidden");
    $viewSection.addClass("hidden").removeClass("visible");
};

var $addSongField = $("#addSongField");
var $addArtistField = $("#addArtistField");
var $addAlbumField = $("#addAlbumField");
var $addSongButton = $("#addSongButton");

$addSongButton.click(function(){
    addToSongList();
});

function addToSongList() {
    if ($addSongField.val() !== "" && $addArtistField.val !== "" && $addAlbumField.val !== "") {
        let newSong = {};
        newSong.id = getID();
        newSong.title = $addSongField.val();
        newSong.artist = $addArtistField.val();
        newSong.album = $addAlbumField.val();
        songs.push(newSong);
        printToDOM(songs);
        displayView();
        $addSongField.val("");
        $addArtistField.val("");
        $addAlbumField.val("");
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
    $outputDiv.html(outputString);
    $(".delbutton").click(function(){
        let id = $(this).attr("id");
        deleteSong(id);
    });
    $(".morebutton").click(function(){
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
var idCounter = 0;

function popArray(data) {
    data.forEach(each => each.id = getID());
    data.forEach(each => songs.push(each));
    printToDOM(songs);
};

function getID () {
    var currID = idCounter;
    idCounter++;
    return currID;
};

function loadJSON(filepath) {
    if (filepath !== undefined) {
        $.ajax({
            url: filepath
        }).done(function (data) {
            data = data.songs;
            popArray(data)
        }).fail(function (error) {
            console.log("JSON Error", error)
        });
    }
};

function getNextJSONFile(){ // This function keeps track of all the JSON Files and makes sure it only loads files until it runs out of files.
    if (JSONList.length > numberFilesLoaded) { //That way, the only thing hard-coded is the JSONList
        currFile = numberFilesLoaded;
        numberFilesLoaded++;
        return JSONList[currFile];
    } else {
        return undefined;
    }
};

const JSONList = ["songs.json", "songs2.json"];
var numberFilesLoaded = 0;

loadJSON(getNextJSONFile());
