// Create your global variables below:
var tracklist = ["Apelido Carinhoso", "Na Hora de Amar", "Sera Que Ce Deixa", "Por Um Gole A Mais", "Rio e Nova York", "Fui Fiel", "Inventor dos Amores", "Festa Boa", "Homem de Familia", "Que Pena Que Acabou","Balada Boa"];
var volLevels = [];
var value = 0;
var currTime = 0;
var songsIndex = 0;
var timerId;

function init() {
	//initializes the three first volume bars 
	document.getElementById("vl0").style.backgroundColor = "#9f5cc4";
	document.getElementById("vl1").style.backgroundColor = "#9f5cc4";
	document.getElementById("vl2").style.backgroundColor = "#9f5cc4";
	//initializes the current global volume index
	value = 2;
	//inserts the volume references in an array
	for (var i = 5; i >= 0; i--) {
		volLevels[i] = document.getElementById("vl"+ i)
	}
};

function volUp() {
	// colors volume bars with funky color
	if (value <=4) {
	value = value + 1
	volLevels[value].style.backgroundColor = "#9f5cc4";
	}
}

function volDown() {
	//colors it white, stops when index reaches minimum
	if (value >= 0) {
	volLevels[value].style.backgroundColor = "white";
	value = value - 1
	}
}

function switchPlay() {
	//if displayed button is play, then set it to pause, and start playing
	if (document.getElementById("pause-play").innerHTML == "play_arrow") {
		document.getElementById("pause-play").innerHTML = "pause"
		timerId = setInterval(function() {updateTime(currTime)},1000);
	}
	// Sets the button to play, and stops playing
	else {
		clearInterval(timerId);
		document.getElementById("pause-play").innerHTML = "play_arrow";
		
	}

}

function nextSong() {
	//sets the time to 0
	currTime = 0;
	updateTime(0);
	//loops forward if index is 10
	if (songsIndex == 10) {
		songsIndex = 0;
		document.getElementById("song-name").innerHTML = tracklist[songsIndex]
	}
	else {
		songsIndex = songsIndex + 1
	document.getElementById("song-name").innerHTML = tracklist[songsIndex]
	}
	// Automatically starts running if song was playing before
	if (document.getElementById("pause-play").innerHTML == "pause") {
		clearInterval(timerId);
		timerId = setInterval(function() {updateTime(currTime)},1000);
	}

}

function prevSong() {
	//sets the time to 0
	currTime = 0;
	updateTime(0);
	//loops back if index is 0
	if (songsIndex == 0) {
		songsIndex = 10;
		document.getElementById("song-name").innerHTML = tracklist[songsIndex]
	}
	else {
		songsIndex = songsIndex - 1
	document.getElementById("song-name").innerHTML = tracklist[songsIndex]
	}
	// Automatically starts running if song was playing before
	if (document.getElementById("pause-play").innerHTML == "pause") {
		clearInterval(timerId);
		timerId = setInterval(function() {updateTime(currTime)},1000);
	}
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);
    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

function updateTime(time) {
	//sets the value of the slider to be the value of the time passed to updateTime
	document.getElementById("timer").value = time;
	//converts the time into the correct format for display
	time = String(time)
	time = secondsToMs(time)
	document.getElementById("time-elapsed").innerHTML = time;
	currTime = currTime + 1;
	// Calls nextsong function when the display marks 3:00
	if (currTime > 181) {
		nextSong();
	}
}

function sliderChange() {
	// set the global variable currTime to the value of the slider this will allow it to continue playing starting at the new value determied by the slider
	time = document.getElementById("timer").value; 
	currTime = Number(time);
	// Update the value shown in the time-elapsed part to show the value of the slider
	updateTime(currTime);
	if (document.getElementById("pause-play").innerHTML == "pause") {
	// Stops the current interval so that we don't add to the current updateTime calling interval
	clearInterval(timerId);
	timerId = setInterval(function() {updateTime(currTime)},1000);
	}
	else{
		clearInterval(timerId);
	}
}

init();