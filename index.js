var startTime;
var elapsedTime = 0;
var timerInterval;
var isRunning = false;

function formatTime(milliseconds) {
	var hours = Math.floor(milliseconds / 3600000);
	var minutes = Math.floor((milliseconds % 3600000) / 60000);
	var seconds = Math.floor((milliseconds % 60000) / 1000);
	var milliseconds = Math.floor(milliseconds % 1000);

	return (
		(hours < 10 ? '0' + hours : hours) +
		':' +
		(minutes < 10 ? '0' + minutes : minutes) +
		':' +
		(seconds < 10 ? '0' + seconds : seconds)
	);
}

function startTimer() {
	if (!isRunning) {
		if (elapsedTime === 0) {
			startTime = Date.now();
		} else {
			startTime = Date.now() - elapsedTime;
		}

		timerInterval = setInterval(function () {
			var currentTime = Date.now();
			elapsedTime = currentTime - startTime;
			display.innerText = formatTime(elapsedTime);
			milliseconds = elapsedTime % 1000;
			millisecondsText.innerText = milliseconds;
			if (milliseconds === 0) {
				millisecondsText.innerText = '000';
			}
		}, 1);

		isRunning = true;
		startBtn.innerText = 'Pause';
	} else {
		clearInterval(timerInterval);
		isRunning = false;
		startBtn.innerText = 'Continue';
	}
}

function clearTimer() {
	clearInterval(timerInterval);
	elapsedTime = 0;
	display.innerText = formatTime(elapsedTime);
	millisecondsText.innerText = '000';
	isRunning = false;
	startBtn.innerText = 'Start';
}

