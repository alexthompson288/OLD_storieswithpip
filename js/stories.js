$(document).ready(function(){
	console.log('ready');

	addLinkToAllWords('sun in the rain');


	

	$('.story-text a').click(function(){
		clearReadingpad();
		clearWholeWordAudio();
		padWord = $(this).html();
		console.log(padWord);
		findWord(padWord);
		addAudioToWholeWordButton(padWord);
		$('.readingpad-frame').fadeIn();
		
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
		mneumonic: 'sneaky_snake'
	},
	{
		id: 14,
		phoneme: 'u',
		grapheme: 'uh',
		phonemeaudio: 'u_uh_ugly_umbrella.wav',
		mneumonic: 'ugly_umbrella'
	},
	{
		id: 44,
		phoneme: 'n',
		grapheme: 'n',
		phonemeaudio: 'n_n_naughty_nose.wav',
		mneumonic: 'naughty_nose'
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
		mneumonic: 'rich_rat'
	},
	{
		id: 14,
		phoneme: 'ai',
		grapheme: 'ai',
		phonemeaudio: 'ai_ay_train_in_the_rain.wav',
		mneumonic: 'train_in_the_rain'
	},
	{
		id: 44,
		phoneme: 'n',
		grapheme: 'n',
		phonemeaudio: 'n_n_naughty_nose.wav',
		mneumonic: 'naughty_nose'
	}]
		 
}

];

//Use this to play audio files upon click
function EvalSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
 }

// Sets the audio for the play whole word button
function addAudioToWholeWordButton(word){
	// adds audio for the play button
	$('#playWholeWord').attr('src','resources/audio/words/' + word + '.wav');
	console.log('word set in the html is '+word);
}

// clears the audio src attribute for the play whole word button
function clearWholeWordAudio(){
	$('#playWholeWord').attr('src',' ');
}
	// adds the audio for the sound buttons
	// needs logic for digraphs, trigraphs and split digraphs here
	// needs to add the change to colour of letter and bg when either letter or sound button is pushed	


function addAudioToPhonemeButtons(phoneme){

var srcAttr = 'benny_phoneme_' + phoneme.phoneme + phoneme.grapheme + phoneme.mneumonic + '.wav';
var soundButtonHtml = 	'<audio id="phoneme-id-' + phoneme + '" src="' +  srcAttr + '"  preload="auto" autobuffer></audio>' +  
                        '<a href="#" class="fruitmachine-button" id="play-button-push" onClick="EvalSound(\'audio2\')">';
console.log(soundButtonHtml + ' is the sound');
	for (var i=0 ; i < length ; i++){
		var p = i+1;
		$('#audio'+p).attr('src','assets/resources/audio/'+correctWord[i]+'.wav');
	}
}



function clearReadingpad(){
	$('.readingpad-all-sound-container').empty();
}


function addLinkToAllWords(sentence){
	var wordArray = sentence.split(" ");
	lengthOfWordArray = wordArray.length;
	for(var t = 0 ; t < lengthOfWordArray ; t++){
		var linkHtml = '<a href="#" id="word-' + wordArray[t] + '">' + wordArray[t] + '</a> ';
		console.log(linkHtml);
		$('.story-page h1').append(linkHtml);
	}
}

function findWord(word){
	var numberOfWords = words.length;
}

// findWord


// Loop through each phoneme and put it in a single or a double sized div.  
// If double, split the letters and put them in the p tags

function createPhonemeDiv(phoneme){

	if(phoneme.phoneme.length === 1){
		letterCountVariable = 'single';
	}
	else if(phoneme.phoneme.length === 2)
	{
		letterCountVariable = 'double';
	}
	else if(phoneme.phoneme.length === 3){
		letterCountVariable = 'treble';
	}
	console.log('LetterCountVariable is ' + letterCountVariable);

	// Instantiate variables for letters in single, digraphs and trigraphs
	
	var firstLetter = phoneme.phoneme[0];
	var secondLetter = phoneme.phoneme[1];
	var thirdLetter = phoneme.phoneme[2];

	// Template for div that will take letters for a phoneme and show the right sound button with correct classes



					
	// Variables that can be changed to create the template above			

	var letterAndSoundContainerDiv ='<div class="readingpad-total-height ' + ' ' + letterCountVariable + '-letter-container">\ ';

	var letterContainerDiv = '<div class="readingpad-letter-area ' + letterCountVariable + '-letter-letter">\ ';

	var firstLetter = '<p class="' + letterCountVariable + '-letter-first-letter">' + firstLetter +'</p>\ ';
	var secondLetter = '<p class="' + letterCountVariable + '-letter-second-letter">' + secondLetter +'</p>\ ';
	var thirdLetter = '<p class="' + letterCountVariable + '-letter-third-letter">' + thirdLetter +'</p>\ ';

	// Number of letters that will populate a template
	var letters; 
	if(letterCountVariable === 'single'){
		letters = firstLetter;
	}
	else if(letterCountVariable === 'double'){
		letters = firstLetter + secondLetter;
	}
	else if(letterCountVariable === 'treble'){
		letters = firstLetter + secondLetter + thirdLetter;
	};

	var closeLetterContainerDiv = '</div>\ ';
	var phonemeAudioPath = 'resources/audio/phonemes/benny_phoneme_' + phoneme.phoneme + '_' + phoneme.grapheme + '_' + phoneme.mneumonic + '.wav';
	var soundButtonAudioTag = '<audio id="phoneme-id-' + phoneme.phoneme + '" src="' + phonemeAudioPath + '"  preload="auto" autobuffer></audio>\ ';
	var soundButtonLink = '<a href="#" onClick="EvalSound(\'phoneme-id-'+ phoneme.phoneme +'\')"><p class="indent-text phoneme-sound-button-p"></p></a>\ ';
	var soundButtonContainer = '<div class="' + letterCountVariable + '-letter-button readingpad-button-area">\ ' + soundButtonAudioTag + soundButtonLink + '</div>\ ';

	var closeLetterAndSoundContainer = '</div>\ ';

	var dynamicLetterReadingPadDiv = 	letterAndSoundContainerDiv + 
										letterContainerDiv +
										letters + 
										closeLetterContainerDiv +
										soundButtonContainer +
										closeLetterAndSoundContainer;

	console.log(dynamicLetterReadingPadDiv);
	$('.readingpad-all-sound-container').append(dynamicLetterReadingPadDiv);
}

// Loop through the phonemes and run the write div function for each one

function loopPhonemesinWord(word){
	var numberOfPhonemes = word.phonemes.length;
	for(var i=0; i < numberOfPhonemes; i++){
		var phoneme = word.phonemes[i];
		console.log(phoneme.phoneme);
		createPhonemeDiv(phoneme);
	}
}


function findWord(myWord){
	var totalWords = words.length;
	console.log(totalWords);
	for(var p = 0 ; p < totalWords ; p++){
		var word = words[p];

		console.log(word.word);

		if(word.word === myWord){
			console.log("WE FOUND " + word.word);
			loopPhonemesinWord(word);
		}
	}
}

