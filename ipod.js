// Create your global variables below:
var tracklist = ["Rock 'n' Roll Star", "Shakermaker", "Live Forever", "Up in The Sky", "Columbia", "Supersonic", "Bring it On Down", "Cigarettes and Alcohol", "Digsy's Dinner", "Slide Away"];
var volLevels = [];
var id_list = ['vl0', 'vl1', 'vl2', 'vl3', 'vl4', 'vl5']
let time = 0;
let timerId = null;
function init() {
  // Your code goes here
    for (i = 0; i < 6; i++){
    volLevels[i] = document.getElementById(id_list[i]);
    };
    // set first three levels to high
    volLevels[0].style.backgroundColor = "salmon"
    volLevels[1].style.backgroundColor = "salmon"
    volLevels[2].style.backgroundColor = "salmon"
};

function volUp() {
	// Your code goes here
    i = 0;
    while (i < 6) {
        // set volume level to high
        if (volLevels[i].style.backgroundColor != "salmon") {
            volLevels[i].style.backgroundColor = "salmon"
            break;
        };
        i += 1;
    };
}

function volDown() {
	// Your code goes here
    i = 5;
    while (i >= 0) {
        // set volume level to low
        if (volLevels[i].style.backgroundColor == "salmon") {
            volLevels[i].style.backgroundColor = "transparent"
            break;
        };
        i -= 1;
    };
}

function switchPlay() {
	// Your code goes here
    let button = document.getElementById('play-button');
    if (button.innerHTML == `<i class="material-icons">play_arrow</i>`) {
        //change play button to pause
        document.getElementById('play-button').innerHTML = `<i class="material-icons">pause</i>`;
        // start 1 sec timer
        timerId = setInterval(timePlay, 1000);


    } else{
        // change pause button to play
        document.getElementById('play-button').innerHTML = `<i class="material-icons">play_arrow</i>`;
        // end timer
        clearInterval(timerId);
    };


}


function timePlay() {
    // increment time and value of range slider
    time = Number(document.getElementById('slider').value);
    time += 1;
    time_out = secondsToMs(time);
    document.getElementById('slider').value = time;
    document.getElementById('start-time').innerHTML = time_out;
    //if track exceeds 180s then skip to next track
    if (time > 180) {
        nextSong();
    };
}

function nextSong() {
	// Your code goes here
    // initialize time and slider value to 0
    document.getElementById('slider').value = "0";
    document.getElementById('start-time').innerHTML = "0:00";
    i = tracklist.indexOf(document.getElementById('song-name').innerHTML);
    // change song title
    if (i + 1 == tracklist.length) {
        i = -1;
    };
    document.getElementById('song-name').innerHTML = tracklist[i+1];


}

function prevSong() {
	// Your code goes here
    // Your code goes here
    // initialize time and slider value to 0
    document.getElementById('slider').value = "0";
    document.getElementById('start-time').innerHTML = "0:00";
    i = tracklist.indexOf(document.getElementById('song-name').innerHTML);
    // change song title
    if (i - 1 == -1) {
        i = tracklist.length;
    };
    document.getElementById('song-name').innerHTML = tracklist[i-1];
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();
