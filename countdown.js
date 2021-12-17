var i = 3;

var imageEl = document.querySelector('.image');

// var image

var s = document.getElementById('sound');

// var words = ["","READY?","YOU","ARE",]
var word = ['GET', 'READY'];
var x = 0;

var inputName;

inputName = localStorage.getItem('name');
inputName = JSON.parse(inputName) + '!';

inputName = inputName.toUpperCase();

word.push(inputName);
word.push('');

let timersound = setInterval(playsound, 1400);

let timer = setInterval(countDown, 1000);
// s.play ()

function playsound() {
	s.play();
}

function countDown() {
	if (i != 0) {
		// s.play ()
		// var image = `<img src="./countdownassets/${i}.jpg" alt="" class=" image col p-4"></img>`
		var image = `<h1>${word[x]}</h1>`;
		imageEl.innerHTML = image;
		console.log(word[x]);
		// console.log (test)
	}
	if (i === 0) {
		clearInterval(timer);
		clearInterval(timersound);
		// s.pause()

		location.assign('question.html');
	}

	i--;
	x++;
}
