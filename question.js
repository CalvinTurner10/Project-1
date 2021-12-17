var QuestionandAnswerpile = [
	{
		question: 'What is your favorite genre music?',
		choice: ['Rap', 'RnB', 'Country', 'Rock'],
	},
	{
		question: 'How would you describe your current mood?',
		choice: ['Focused', 'Relaxed', 'Rowdy', 'Intense'],
	},
	{
		question: 'If you could choose one superpower what would it be?',
		choice: ['Flying', 'Hyperspeed', 'Invisibility', 'Super strength'],
	},
	{
		question: 'What is your favorite subject?',
		choice: ['Math', 'Science', 'Art', 'History'],
	},

	{
		question: 'Whats your favorite type of movie? ',
		choice: ['Comedy', 'Action', 'Scary', 'Sci-Fi'],
	},
];

var question = document.getElementById('question');
var choice0 = document.getElementById('choice0');
var choice1 = document.getElementById('choice1');
var choice2 = document.getElementById('choice2');
var choice3 = document.getElementById('choice3');
var span = document.querySelector('span');

var selections = [];

var i = 0;

function showQuestion() {
	for (var y = 0; y < span.length; y++) {}
	question.innerHTML =
		'Question ' + ' # ' + (i + 1) + ': ' + QuestionandAnswerpile[i].question;
	choice0.innerHTML = QuestionandAnswerpile[i].choice[0];
	choice1.innerHTML = QuestionandAnswerpile[i].choice[1];
	choice2.innerHTML = QuestionandAnswerpile[i].choice[2];
	choice3.innerHTML = QuestionandAnswerpile[i].choice[3];
	whatQueNum.innerHTML =
		'Question' +
		' ' +
		(i + 1) +
		' ' +
		'of' +
		' ' +
		QuestionandAnswerpile.length;
	// nextDisplay.innerHTML = ""
}

console.log(localStorage);
// localStorage.setItem('choice', JSON.stringify(choice));
// var choice = JSON.parse(localStorage.getItem('choice'));

function chooseAnswer(a) {
	if (QuestionandAnswerpile[i].choice) {
		// nextDisplay.innerHTML="Next Question";
		console.log(QuestionandAnswerpile[i].choice[0]);
		selections.push(QuestionandAnswerpile[i].choice[0]);
		localStorage.setItem('Answer Selected', JSON.stringify(selections));
	}

	setTimeout(nextQuestion, 200);
}

function chooseAnswer1(a) {
	if (QuestionandAnswerpile[i].choice) {
		// nextDisplay.innerHTML="Next Question";
		console.log(QuestionandAnswerpile[i].choice[1]);
		selections.push(QuestionandAnswerpile[i].choice[1]);
		localStorage.setItem('Answer Selected', JSON.stringify(selections));
	}

	setTimeout(nextQuestion, 200);
}

function chooseAnswer2(a) {
	if (QuestionandAnswerpile[i].choice) {
		// nextDisplay.innerHTML="Next Question";
		console.log(QuestionandAnswerpile[i].choice[2]);
		selections.push(QuestionandAnswerpile[i].choice[2]);
		localStorage.setItem('Answer Selected', JSON.stringify(selections));
	}

	setTimeout(nextQuestion, 200);
}

function chooseAnswer3(a) {
	if (QuestionandAnswerpile[i].choice) {
		// nextDisplay.innerHTML="Next Question";
		console.log(QuestionandAnswerpile[i].choice[3]);
		selections.push(QuestionandAnswerpile[i].choice[3]);
		localStorage.setItem('Answer Selected', JSON.stringify(selections));
	}
	nextQuestion();
	// setTimeout(nextQuestion, 500);
}

function nextQuestion() {
	if (i < QuestionandAnswerpile.length - 1) {
		i = i + 1;
		showQuestion();
	} else {
		QuestionandAnswerpile.length;

		location.assign('rellindex.html');
	}
}
showQuestion();

console.log(localStorage.getItem('Answer Selected'));

window.addEventListener('click', () => {
	var clickSound = document.querySelector('#sound2');
	clickSound.play();
});
