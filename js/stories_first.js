$(document).ready(function(){
	console.log('ready');
	$('#word-rain').click(function(){
		console.log('hello');
		$('.readingpad-frame').fadeToggle();
	});
});

var words = [ 
{
	word: 'sun', 
	phonemes: [
	{
		id: 24,
		phoneme: 's',
		grapheme: 's',
		phonemeaudio: 's_s_sneaky_snake.wav',
		mnemonic: 's_s_sneaky_snake.png'
	},
	{
		id: 14,
		phoneme: 'u',
		grapheme: 'uh',
		phonemeaudio: 'u_uh_ugly_umbrella.wav',
		mnemonic: 'u_uh_ugly_umbrella.png'
	},
	{
		id: 44,
		phoneme: 'n',
		grapheme: 'n',
		phonemeaudio: 'n_n_naughty_nose.wav',
		mnemonic: 'n_n_naughty_nose.png'
	}]
		 
},
{
	word: 'rain', 
	phonemes: [
	{
		id: 24,
		phoneme: 'r',
		grapheme: 'r',
		phonemeaudio: 'r_r_rich_rat.wav',
		mnemonic: 'r_r_rich_rat.png'
	},
	{
		id: 14,
		phoneme: 'ai',
		grapheme: 'ai',
		phonemeaudio: 'ai_ay_train_in_the_rain.wav',
		mnemonic: 'ai_ay_train_in_the_rain.png'
	},
	{
		id: 44,
		phoneme: 'n',
		grapheme: 'n',
		phonemeaudio: 'n_n_naughty_nose.wav',
		mnemonic: 'n_n_naughty_nose.png'
	}]
		 
}

];


// Get the right word and print it to console to show

var word = words[1];
console.log('The word is ' + word.word);

// Get the number of phonemes in the word
var numberOfPhonemes = word.phonemes.length;
console.log('The number of phonemes is ' + numberOfPhonemes);
if(numberOfPhonemes <= 6 ){
	console.log('Use 6 letter reading pad')
}

// Loop through each phoneme and put it in a single or a double sized div.  
// If double, split the letters and put them in the p tags
for(var i=0; i < numberOfPhonemes; i++){
	
	var phoneme = word.phonemes[i].phoneme;
	if(phoneme.length === 1){
		phonemeCountVariable = 'single';
	}
	else if(phoneme.length === 2)
	{
		phonemeCountVariable = 'double';
	}
	else if(phoneme.length === 3){
		phonemeCountVariable = 'treble';
	}
	console.log('phonemeCountVariable is ' + phonemeCountVariable);
}

// Instantiate variables for letters in single, digraphs and trigraphs
var phonemeCountVariable = 'single';
var firstLetter = 'a';
var secondLetter = 'i';
var thirdLetter;

// Template for div that will take letters for a phoneme and show the right sound button with correct classes



				
// Variables that can be changed to create the template above			

var letterAndSoundContainerDiv ='<div class="readingpad-total-height ' + ' ' + phonemeCountVariable + '-letter-container">\ ';

var letterContainerDiv = '<div class="readingpad-letter-area ' + phonemeCountVariable + '-double-letter-letter">\ ';

var firstLetter = '<p class="' + phonemeCountVariable + '-letter-first-letter">' + firstLetter +'</p>\ ';
var secondLetter = '<p class="' + phonemeCountVariable + '-letter-first-letter">' + secondLetter +'</p>\ ';
var thirdLetter = '<p class="' + phonemeCountVariable + '-letter-first-letter">' + thirdLetter +'</p>\ ';

// Number of letters that will populate a template
var letters; 
if(phonemeCountVariable === 'single'){
	letters = firstLetter;
}
else if(phonemeCountVariable === 'double'){
	letters = firstLetter + secondLetter;
}
else if(phonemeCountVariable === 'treble'){
	letters = firstLetter + secondLetter + thirdLetter;
};

var closeLetterContainerDiv = '</div>\ ';
var soundButtonLink = '<a href="#"><p class="">Click</p></a>\ ';
var soundButtonContainer = '<div class="' + phonemeCountVariable + '-letter-button readingpad-button-area">\ ' + soundButtonLink + '</div>\ ';

var closeLetterAndSoundContainer = '</div>\ ';

var dynamicLetterReadingPadDiv = 	letterAndSoundContainerDiv + 
									letterContainerDiv +
									letters + 
									closeLetterContainerDiv +
									soundButtonContainer +
									closeLetterAndSoundContainer;

console.log(dynamicLetterReadingPadDiv);





// WRITING WORDS TO READING PAD AND ADDING SOUND BUTTONS

function writeWordsToReadingpad(){

		// put phonemes into div types
		var word = words[0];
		console.log(word);
		var numberOfPhonemes = word.phonemes.length;
		console.log(numberOfPhonemes);
		// for(var i=0; i < numberOfPhonemes; i++)

		// iterate over phonemes
		// if phoneme.phoneme.length <2 put it in a single letter div
		// if phoneme.phoneme.length === 2 put it in a digraph div
		// if phoneme.phoneme.length === 3 put it in a trigraph div

		// add the appropriate sound button to the div type

		// Connect the sound button to the appropriate phoneme sound

		// Position the div appropriately in relation to the reading pad
		

		
		var i = 0;
		var length = correctWord.length;
		// need logic to position word in the middle of the reading pad
		
			// if (length === 1){
			// 	i = 3;
			// }

			// // elsif (length === 2){
			// i = 2;
			// }
			// // elsif (length === 3){
			// i = 1;
			// }

			// // elsif (length === 4){
			// i = 1;
			// }

		//places each phoneme in on a reading pad block in ascending order





		for (i; i<length; i++){
			var p = i+1;

			$('#word-container-'+ p +'p').text(correctWord[i]);	
		}
	}

function addAudioToButtons(){
	// adds audio for the play button
$('#audio7').attr('src','assets/game/audio/'+correctWord+'.wav');

	// adds the audio for the sound buttons
	// needs logic for digraphs, trigraphs and split digraphs here
	// needs to add the change to colour of letter and bg when either letter or sound button is pushed	 
var length = correctWord.length;
	for (var i=0 ; i < length ; i++){
		var p = i+1;
		$('#audio'+p).attr('src','assets/game/audio/'+correctWord[i]+'.wav');
	}
}