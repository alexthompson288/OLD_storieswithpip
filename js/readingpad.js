function activateReadingPad(){
	clearReadingpad();
	clearWholeWordAudio();
	padWord = $(this).html();
	console.log(padWord);
	findWord(padWord);
	addAudioToWholeWordButton(padWord);
	$('.readingpad-frame').fadeIn();	
}

// var words = [{"ccvc":false,"completed":false,"cvc":false,"cvcc":false,"diagraph":false,"entrypoint_session":1,"entrypointmodule":1,"entrypointunit":1,"id":3,"imagepossible":false,"imagerequired":false,"nondecodable":true,"nonsense":false,"numletters":null,"numphonemes":1,"numsyllables":1,"ordered_phonemes":[{"completed":true,"created_at":"2013-01-13T19:17:03Z","grapheme":"a","id":2,"imagepossible":true,"mneumonic":"angry ant","mneumonic_two":"","phoneme":"a","updated_at":"2013-05-30T13:37:45Z"}],"splitdiagraph":false,"startingletter":null,"tricky":true,"word":"a"},{"ccvc":false,"completed":true,"cvc":true,"cvcc":false,"diagraph":false,"entrypoint_session":null,"entrypointmodule":null,"entrypointunit":null,"id":22,"imagepossible":true,"imagerequired":false,"nondecodable":false,"nonsense":false,"numletters":null,"numphonemes":3,"numsyllables":2,"ordered_phonemes":[{"completed":true,"created_at":"2013-01-13T19:17:56Z","grapheme":"p","id":4,"imagepossible":true,"mneumonic":"pretty pony","mneumonic_two":"","phoneme":"p","updated_at":"2013-05-30T14:13:31Z"},{"completed":true,"created_at":"2013-01-13T19:18:40Z","grapheme":"i","id":6,"imagepossible":true,"mneumonic":"irritable insect","mneumonic_two":"","phoneme":"i","updated_at":"2013-05-30T13:47:37Z"},{"completed":true,"created_at":"2013-01-13T19:18:52Z","grapheme":"n","id":7,"imagepossible":true,"mneumonic":"naughty nose","mneumonic_two":"","phoneme":"n","updated_at":"2013-05-30T14:09:42Z"}],"splitdiagraph":false,"startingletter":null,"tricky":false,"word":"pin"},{"ccvc":false,"completed":false,"cvc":false,"cvcc":false,"diagraph":false,"entrypoint_session":null,"entrypointmodule":null,"entrypointunit":null,"id":10,"imagepossible":false,"imagerequired":false,"nondecodable":false,"nonsense":false,"numletters":null,"numphonemes":2,"numsyllables":1,"ordered_phonemes":[{"completed":true,"created_at":"2013-01-13T19:18:40Z","grapheme":"i","id":6,"imagepossible":true,"mneumonic":"irritable insect","mneumonic_two":"","phoneme":"i","updated_at":"2013-05-30T13:47:37Z"},{"completed":true,"created_at":"2013-05-14T07:39:58Z","grapheme":"dj","id":90,"imagepossible":false,"mneumonic":"treasure on television","mneumonic_two":"","phoneme":"s","updated_at":"2013-06-13T14:12:12Z"}],"splitdiagraph":false,"startingletter":null,"tricky":false,"word":"is"},{"ccvc":false,"completed":null,"cvc":false,"cvcc":null,"diagraph":false,"entrypoint_session":null,"entrypointmodule":null,"entrypointunit":null,"id":19,"imagepossible":null,"imagerequired":false,"nondecodable":null,"nonsense":false,"numletters":null,"numphonemes":2,"numsyllables":1,"ordered_phonemes":[{"completed":true,"created_at":"2013-01-13T19:18:40Z","grapheme":"i","id":6,"imagepossible":true,"mneumonic":"irritable insect","mneumonic_two":"","phoneme":"i","updated_at":"2013-05-30T13:47:37Z"},{"completed":true,"created_at":"2013-01-13T19:18:52Z","grapheme":"n","id":7,"imagepossible":true,"mneumonic":"naughty nose","mneumonic_two":"","phoneme":"n","updated_at":"2013-05-30T14:09:42Z"}],"splitdiagraph":false,"startingletter":null,"tricky":null,"word":"in"},{"ccvc":false,"completed":false,"cvc":false,"cvcc":false,"diagraph":false,"entrypoint_session":15,"entrypointmodule":null,"entrypointunit":3,"id":88,"imagepossible":false,"imagerequired":false,"nondecodable":true,"nonsense":false,"numletters":null,"numphonemes":2,"numsyllables":1,"ordered_phonemes":[{"completed":true,"created_at":"2013-05-13T21:58:18Z","grapheme":"dth","id":89,"imagepossible":true,"mneumonic":"they bathe","mneumonic_two":"","phoneme":"th","updated_at":"2013-06-10T08:47:39Z"},{"completed":false,"created_at":"2013-05-22T22:30:55Z","grapheme":"silent","id":127,"imagepossible":false,"mneumonic":"","mneumonic_two":"","phoneme":"e","updated_at":"2013-05-22T22:30:55Z"}],"splitdiagraph":false,"startingletter":null,"tricky":true,"word":"the"},{"ccvc":false,"completed":true,"cvc":true,"cvcc":false,"diagraph":false,"entrypoint_session":null,"entrypointmodule":null,"entrypointunit":null,"id":14,"imagepossible":true,"imagerequired":false,"nondecodable":false,"nonsense":false,"numletters":null,"numphonemes":3,"numsyllables":1,"ordered_phonemes":[{"completed":true,"created_at":"2013-01-13T19:17:56Z","grapheme":"p","id":4,"imagepossible":true,"mneumonic":"pretty pony","mneumonic_two":"","phoneme":"p","updated_at":"2013-05-30T14:13:31Z"},{"completed":true,"created_at":"2013-01-13T19:18:40Z","grapheme":"i","id":6,"imagepossible":true,"mneumonic":"irritable insect","mneumonic_two":"","phoneme":"i","updated_at":"2013-05-30T13:47:37Z"},{"completed":true,"created_at":"2013-01-13T19:17:15Z","grapheme":"t","id":3,"imagepossible":true,"mneumonic":"terrible troll","mneumonic_two":"","phoneme":"t","updated_at":"2013-05-30T15:02:38Z"}],"splitdiagraph":false,"startingletter":null,"tricky":false,"word":"pit"}];
// console.log(words);
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

function replaceSpaceWithUnderscore(string){
	string = string.replace(/\s/g, "_");
	return string;
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
	var mneumonicPathHelper = replaceSpaceWithUnderscore(phoneme.mneumonic);
	var phonemeAudioPath = 'resources/audio/phonemes/benny_phoneme_' + phoneme.phoneme + '_' + phoneme.grapheme + '_' + mneumonicPathHelper + '.wav';
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
	var numberOfPhonemes = word.ordered_phonemes.length;
	for(var i=0; i < numberOfPhonemes; i++){
		var phoneme = word.ordered_phonemes[i];
		console.log(phoneme.phoneme);
		createPhonemeDiv(phoneme);
	}
}


function findWord(myWord){
	var totalWords = words.length;
	console.log('total words is ' +totalWords);
	for(var p = 0 ; p < totalWords ; p++){
		var word = words[p];

		console.log(word.word);

		if(word.word === myWord){
			console.log("WE FOUND " + word.word);
			loopPhonemesinWord(word);
		}
	}
}