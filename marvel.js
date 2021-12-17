const pubKey = 'fb47d0b05d9f848159281d26dae489f1';
const prvKey = '63881b8a8f3fafeeb37ecdf95631f9f0015ac340';
const hash = 'f3f5921628bb39956cfbb6a529983f2c';

const ts = new Date();
var encrypted = CryptoJS.MD5(ts + prvKey + pubKey).toString();
var letter = '';
var newPay = [];
payData = JSON.parse(localStorage.getItem('Answer Selected'));
newPay.push(payData);
var selected = newPay[0][2];
const random = Math.floor(Math.random() * (9 - 0) + 0);
const random2 = Math.floor(Math.random() * (5 - 0) + 0);
const arrSpeed = [
	{
		name: 'black+panther',
	},
	{
		name: 'silver+surfer',
	},
	{
		name: 'quicksilver',
	},
	{
		name: 'lightspeed',
	},
	{
		name: 'nova',
	},
];
arrInvisible = [
	{
		name: 'invisible+woman',
	},
	{
		name: 'ronan',
	},
	{
		name: 'sif',
	},
	{
		name: 'human+torch',
	},
	{
		name: 'speed',
	},
];
const arrStrength = [
	{
		name: 'hulk',
	},
	{
		name: 'luke+cage',
	},
	{
		name: 'thor',
	},
	{
		name: 'colossus',
	},
	{
		name: 'juggernaut',
	},
	{
		name: 'rogue',
	},
	{
		name: 'deadpool',
	},
	{
		name: 'thanos',
	},
	{
		name: 'hercules',
	},
];
const arrFly = [
	{
		name: 'iron+man',
	},
	{
		name: 'wasp',
	},
	{
		name: 'ultron',
	},
	{
		name: 'magneto',
	},
	{
		name: 'storm',
	},
	{
		name: 'thor',
	},
	{
		name: 'falcon',
	},
	{
		name: 'captain+america',
	},
	{
		name: 'doctor+strange',
	},
];
// const randomHero = arr[random].name;

if (selected == 'Flying') {
	letter = arrFly[random].name;
	var requestUrl = `http://gateway.marvel.com/v1/public/characters?name=${letter}&ts=${ts}&apikey=${pubKey}&hash=${encrypted}`;
} else if (selected == 'Super strength') {
	letter = arrStrength[random].name;
	var requestUrl = `http://gateway.marvel.com/v1/public/characters?name=${letter}&ts=${ts}&apikey=${pubKey}&hash=${encrypted}`;
} else if (selected == 'Invisibility') {
	letter = arrInvisible[random2].name;
	var requestUrl = `http://gateway.marvel.com/v1/public/characters?name=${letter}&ts=${ts}&apikey=${pubKey}&hash=${encrypted}`;
} else if (selected == 'Hyperspeed') {
	letter = arrSpeed[random2].name;
	var requestUrl = `http://gateway.marvel.com/v1/public/characters?name=${letter}&ts=${ts}&apikey=${pubKey}&hash=${encrypted}`;
}

const marvel = document.querySelector('ol');

// heroNameReturn();

// var requestUrl = `http://gateway.marvel.com/v1/public/characters?name=${letter}&ts=${ts}&apikey=${pubKey}&hash=${encrypted}`;
fetch(requestUrl)
	.then((response) => response.json())
	.then((data) => {
		const dataList = data;
		const char = dataList.data.results;
		console.log(dataList.data.results[0].description);
		var details = dataList.data.results[0].description;
		var detailsNew = details.replaceAll('""', '');

		char.forEach((item, i) => {
			var each = document.createElement('li');
			console.log(item.thumbnail);
			var themName = item.name;
			var them = JSON.stringify(
				item.thumbnail.path + '.' + item.thumbnail.extension
			);
			each.append(document.createTextNode(item.thumbnail[i]));

			return (marvel.appendChild(
				each
			).innerHTML = `<div class='card' data-text='${detailsNew}'><p>Your Super Hero is</p><span>${themName}</span> <img src=${them} /></div>`);
		});

		console.log(data);

		// selected.forEach((i) => {
		// 	if (i == 'Flying') {
		// 		return (letter = arr[6]);
		// 	}
		// });
	});

console.log(random);

var logoHome = document.querySelector('.logo');

logoHome.addEventListener('click', () => {
	console.log('hey');
	location.assign('Main.html');
});

// this.data.forEach((item) => {
// console.log(this.requestUrl);
// });

// marvel.textContent = 'data';

// Established response API's
// http://gateway.marvel.com/v1/public/characters?nameStartsWith=${letter}&ts=${ts}&apikey=${pubKey}&hash=${encrypted}
// function payReturn(char) {
// 	var requestUrl = `http://gateway.marvel.com/v1/public/characters?name=${char}&ts=${ts}&apikey=${pubKey}&hash=${encrypted}`;
// 	fetch(requestUrl)
// 		.then((response) => response.json())
// 		.then((data) => {
// 			const dataList = data;
// 			const char = dataList.data.results;
// 			// console.log(dataList.data.results[0].description);
// 			char.forEach((item, i) => {
// 				var each = document.createElement('li');
// 				console.log(item.thumbnail);
// 				var themName = item.name;
// 				var them = JSON.stringify(
// 					item.thumbnail.path + '.' + item.thumbnail.extension
// 				);
// 				each.append(document.createTextNode(item.thumbnail[i]));

// 				return (marvel.appendChild(
// 					each
// 				).innerHTML = `<div class='card'><p>Your Super Hero is</p><span>${themName}</span> <img src=${them} /></div>`);
// 			});
// 			// var newPay = [];
// 			// payData = JSON.parse(localStorage.getItem('Answer Selected'));
// 			// newPay.push(payData);
// 			// var selected = newPay[0];

// 			// selected.forEach((i) => {
// 			// 	if (i == 'Flying') {
// 			// 		return letter = arr[6];
// 			// 	}

// 			// });
// 		});
// }
