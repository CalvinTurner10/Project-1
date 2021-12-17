var vidId;
var lengthVid;
var input;
var vidPlayerEl = document.querySelector('#player');
var i = 0;

// array of possible choices
var rapGenre = [
	'Rarin - Toxic Ends (Official Music Video)',
	'Idris Elba - Private Garden - Official Music Video HQ',
	'B Free - Teleport Me (feat. Jay Squared) [Official Music Video]',
];
var rnbGenre = [
	'Chris Brown - All night (Official Video)',
	"New Drake, The Weekend I'm Numb Ft Lil' Wayne Music Video 2019",
	'Kelly Rowland - Dumb ft. Trevor Jackson',
];
var countryGenre = [
	'Like A Country Love Song [Official Music Video]',
	'Megan Collins - Jenga | Official Music Video',
	'Dylan Joseph - 27007 (Official Music Video)',
];
var rockGenre = [
	'Young Other - Between The Few (Official Music Video)',
	'STAGS - Sun Bleached Baby (Official Music Video)',
	'Petra - Creed (Official Music Video)',
];

var musicChoice;

// get what was selected from local storage
musicChoice = JSON.parse(localStorage.getItem('Answer Selected'));
// look at the value in index 0 because that is where the music question is located
musicChoice = musicChoice[0];

if (musicChoice == 'Rap') {
	lengthVid = 'short';

	// randomly choose a index number from Genre array
	var index = Math.floor(Math.random() * rapGenre.length);

	// random index in array will be set to input var
	input = rapGenre[index];

	// call api
	getApiVid();
}

if (musicChoice == 'RnB') {
	lengthVid = 'short';

	// randomly choose a index number from Genre array
	var index = Math.floor(Math.random() * rnbGenre.length);

	// random index in array will be set to input var
	input = rnbGenre[index];

	// call api
	getApiVid();
}

if (musicChoice == 'Country') {
	lengthVid = 'short';

	// randomly choose a index number from Genre array
	var index = Math.floor(Math.random() * countryGenre.length);

	// random index in array will be set to input var
	input = countryGenre[index];

	// call api
	getApiVid();
}

if (musicChoice == 'Rock') {
	lengthVid = 'medium';

	// randomly choose a index number from Genre array
	var index = Math.floor(Math.random() * rockGenre.length);

	// random index in array will be set to input var
	input = rockGenre[index];

	// call api
	getApiVid();
}

function getApiVid() {
	// api url with key and parameters
	var requestUrl =
		'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCuPrTUMPdfPTBq-3PnOOxfFCDoe_FeLDc&part=snippet&maxResults=1&q=' +
		input +
		'&type=video&videoDuration=' +
		lengthVid +
		'&videoEmbeddable=true&videoLicense=creativeCommon';

	// call api
	fetch(requestUrl)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			// grab the video Id from response and save it
			vidId = data.items[0].id.videoId;

			console.log(vidId);

			if (i >= 1) {
				// clear video before loading new video
				// var myobj = document.getElementById("vidPlayer");
				// myobj.remove();
				vidPlayerEl.innerHTML = '';
			}

			// create/display video player and add videoId to src url

			// var att = document.createAttribute ("src")
			// att.value = "hello"
			// vidPlayerEl.setAttribute(att);

			vidPlayerEl.innerHTML =
				`<p>Your Music Pick</p><iframe id= "vidPlayer" width="301" height="300"
        src="https://www.youtube.com/embed/` +
				vidId +
				`?autoplay=1&mute=1">
        </iframe>`;
			i++;
		});
}

// https://www.youtube.com/embed/"+vidId+"?autoplay=1&mute=1
