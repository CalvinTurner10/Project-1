var inputEl = document.querySelector('#inputText');
var themeSong = document.getElementById('#theme');
var input;
var test;

function setHalf() {
	themeSong.volume = -0.5;
}

function nextPage() {
	input = document.getElementById('inputText').value;

	test = input.length;

	if (test != 0) {
		input = JSON.stringify(input);
		localStorage.setItem('name', input);

		location.assign('countdown.html');
	}
	if (test == 0) {
		console.log('hey');
		var btn = document.getElementById('inputText');
		btn.setAttribute('placeholder', 'Reading is Fundamental');
		setInterval(Please, 3000);
	}
}

function Please() {
	var btn = document.getElementById('inputText');
	btn.setAttribute('placeholder', 'Please Enter a Name');
}
