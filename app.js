// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// var textToSpeak = 'This is the text string that you will generate with your script';
// var speakButton = document.querySelector('button');
var storymaker = [
	['The Turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The Elephant', 'The cat'],
	['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'],
	['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'],
	['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'],
	['on the moon', 'on the chair', 'in the spaghetti', 'in my soup', 'on the grass', 'in my shoes']
];

// Subject conjugation arrays
var Subjects = ['The Turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The Elephant', 'The cat'];
var Verbs = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var Adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var Nouns = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var Places = ['on the moon', 'on the chair', 'in the spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

// Left side Buttons
var speakSubjectsLeftButton = document.querySelector('button.subjects.left');
var speakVerbsLeftButton = document.querySelector('button.verbs.left');
var speakAdjectivesLeftButton = document.querySelector('button.adjectives.left');
var speakNounsLeftButton = document.querySelector('button.nouns.left');
var speakPlacesLeftButton = document.querySelector('button.places.left');

// Right side buttons
var speakSubjectsRightButton = document.querySelector('button.subjects.right');
var speakVerbsRightButton = document.querySelector('button.verbs.right');
var speakAdjectivesRightButton = document.querySelector('button.adjectives.right');
var speakNounsRightButton = document.querySelector('button.nouns.right');
var speakPlacesRightButton = document.querySelector('button.places.right');
var speakSurprisesRightButton = document.querySelector('button.surprises.right');
var speakPlaybackRightButton = document.querySelector('button.playback.right');
var speakRandomStoryRightButton = document.querySelector('button.randomStory.right');
var speakResetRightButton = document.querySelector('button.reset.right');

var Phrase = Array(5);

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.onclick = function() {
// 	speakNow(textToSpeak);
// }
// Onclick handler for the left side buttons 1-5 that speaks the text contained in the above var Subjects, Verbs, Adjectives, Nouns and Places
speakSubjectsLeftButton.onclick = function() {
	speakNow(storymaker[0].join (','));
}
speakVerbsLeftButton.onclick = function() {
	speakNow(storymaker[1].join (','));
}
speakAdjectivesLeftButton.onclick = function() {
	speakNow(storymaker[2].join (','));
}
speakNounsLeftButton.onclick = function() {
	speakNow(storymaker[3].join (','));
}
speakPlacesLeftButton.onclick = function() {
	speakNow(storymaker[4].join (','));
}
// Onclick handler for the right side buttons 1-5 that speaks the text contained in the above var Subjects, Verbs, Adjectives, Nouns and Places
speakSubjectsRightButton.onclick = function() {
	Phrase[0] = randomValueFromArray(storymaker[0]);
	speakNow(Phrase[0]);
}
speakVerbsRightButton.onclick = function() {
	Phrase[1] = randomValueFromArray(storymaker[1]);
	speakNow(Phrase[1]);
}
speakAdjectivesRightButton.onclick = function() {
	Phrase[2] = randomValueFromArray(storymaker[2]);
	speakNow(Phrase[2]);
}
speakNounsRightButton.onclick = function() {
	Phrase[3] = randomValueFromArray(storymaker[3]);
	speakNow(Phrase[3]);
}
speakPlacesRightButton.onclick = function() {
	Phrase[4] = randomValueFromArray(storymaker[4]);
	speakNow(Phrase[4]);
}
// Onclick handler for the right side buttons Surprise and Playback Buttons
speakSurprisesRightButton.onclick = function () {
	for (var i = 0; i <storymaker.length; i++) {
			Phrase[i] = randomValueFromArray(storymaker[i]);
	}
	speakNow(Phrase.join(' '));
}
speakPlaybackRightButton.onclick = function () {
	speakNow(Phrase.join(' '));
}

function randomValueFromArray(array) {
	return array[Math.floor(Math.random()*array.length)];
}

/* Example code from Random Story Lab 3 
/* OnClick handler for right side buttons Reset and RandomStory and generate random story*/
var Reset = document.getElementById('reset').onclick = function() {
	document.getElementById('story').innerHTML = '';
};
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');
var storyText = 'My teacher :inserta sat on :insertb a slimy :insertc worm :insertd on the grass :inserte.';
var insertA = ['The Turkey', 'Mom', 'Dad', 'The dog', 'The Elephant', 'The cat'];
var insertB = ['ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var insertC = ['a funny', 'a scary', 'a goofy', 'a barking', 'a fat'];
var insertD = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug'];
var insertE = ['on the moon', 'on the chair', 'in the spaghetti', 'in my soup', 'in my shoes'];
function randomValueFromArray(array) {
	return array[Math.floor(Math.random()*array.length)];
}
function result () {
var newStory = storyText;
var aItem = randomValueFromArray(insertA),
	bItem = randomValueFromArray(insertB),
	cItem = randomValueFromArray(insertC),
	dItem = randomValueFromArray(insertD),
	eItem = randomValueFromArray(insertE);
newStory = newStory.replace('.inserta', aItem);
newStory = newStory.replace('.inserta', aItem);
newStory = newStory.replace('.insertb', bItem);
newStory = newStory.replace('.insertc', cItem);
newStory = newStory.replace('.insertd', dItem);
newStory = newStory.replace('.inserte', eItem);
}
story.textContent = newStory;
story.style.visibility = 'visible';

randomize.addEventListener('click', result);
