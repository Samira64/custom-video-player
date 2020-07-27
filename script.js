const video = document.getElementById("video"),
      play = document.getElementById("play"),
      stop = document.getElementById("stop"),
      progressTrack = document.getElementById("progress"),
      timestamp = document.getElementById("timestamp");


function toggleVideoStatus() {
	if(video.paused) {
		video.play();
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	} else {
		video.pause();
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	}
}

function updateTimestamp() {
	progress.value = (video.currentTime * 100) / video.duration;

	let mins = Math.floor(video.currentTime / 60);
	let secs = Math.floor(video.currentTime - mins * 60);

	if (mins < 10) {
		mins = "0" + String(mins);
	} 

	if (secs < 10) {
		secs = "0" + String(secs);
	}

	timestamp.innerText = mins + ":" + secs;
}

function stopVideo() {
	video.currentTime = 0;
	video.pause();
}

function setVideoProgress() {
	video.currentTime = (+progress.value * video.duration) / 100;
}



//Event Listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("timeupdate", updateTimestamp);
play.addEventListener("click", toggleVideoStatus);
stop.addEventListener("click", stopVideo);
progress.addEventListener("change", setVideoProgress);
