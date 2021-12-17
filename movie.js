var head = document.querySelector('h1');
const key = '34da3d2a';
var matrix = '';
var selectedMov = newPay[0][4];
const randomMov = Math.floor(Math.random() * (5 - 0) + 0);
const comedyArr = [
	{
		name: 'The+Mask',
	},
	{
		name: 'Step+Brothers',
	},
	{
		name: 'Superbad',
	},
	{
		name: 'the+hangover',
	},
	{
		name: 'friday',
	},
];
const actionArr = [
	{
		name: 'Django+unchained',
	},
	{
		name: 'the+matrix',
	},
	{
		name: 'avengers',
	},
	{
		name: 'bumblebee',
	},
	{
		name: 'Blade',
	},
];
const scaryArr = [
	{
		name: 'get+out',
	},
	{
		name: 'spiral',
	},
	{
		name: 'candyman',
	},
	{
		name: 'the+conjuring',
	},
	{
		name: 'scream+2',
	},
];
const sci_fiArr = [
	{
		name: 'venom',
	},
	{
		name: 'ready+player+one',
	},
	{
		name: 'interstellar',
	},
	{
		name: 'fantastic+four',
	},
	{
		name: 'looper',
	},
];
// const randomMovie = comedyArr[randomMov].name;
// const movieNameReturn = () => (matrix = randomMovie);
// movieNameReturn();
if (selectedMov == 'Comedy') {
	matrix = comedyArr[randomMov].name;
	var omdbUrl = `http://www.omdbapi.com/?t=${matrix}&apikey=${key}`;
} else if (selectedMov == 'Action') {
	matrix = actionArr[randomMov].name;
	var omdbUrl = `http://www.omdbapi.com/?t=${matrix}&apikey=${key}`;
} else if (selectedMov == 'Scary') {
	matrix = scaryArr[randomMov].name;
	var omdbUrl = `http://www.omdbapi.com/?t=${matrix}&apikey=${key}`;
} else if (selectedMov == 'Sci-Fi') {
	matrix = sci_fiArr[randomMov].name;
	var omdbUrl = `http://www.omdbapi.com/?t=${matrix}&apikey=${key}`;
}

// const omdbUrl = `http://www.omdbapi.com/?t=${matrix}&apikey=${key}`;

fetch(omdbUrl)
	.then((response) => response.json())
	.then((data) => {
		const movie = data.Poster;
		console.log(data.BoxOffice);
		var plot = data.Plot;
		// var display = document.createElement('li');
		// display.append(document.createTextNode(movie));
		head.innerHTML = `<div class='cardMov' data-text="${plot}"><p>Your Movie is</p><span>${data.Title}</span><img src=${movie} /> </div>`;

		console.log(data);

		// genre = [Superbad];
	});
