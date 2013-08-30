$(document).ready(function(){
	console.log('letter room si ready');
	console.log(single_letter_phonemes[1].phoneme);
	createPhonemesDivs();
});

function replaceSpaceWithUnderscore(string){
	string = string.replace(/\s/g, "_");
	return string;
}

function createPhonemesDivs(){
	var lengthOfPhonemesArray = single_letter_phonemes.length;
	var i;
	for( i = 0 ; i < lengthOfPhonemesArray ; i++ ){
		var phoneme = single_letter_phonemes[i];
		var min = 0;
		var max = 3-1;
		// and the formula is:
		var classOptions = ['word-bank-bg-green','word-bank-bg-purple','word-bank-bg-yellow'];
		var numberOfOptions = classOptions.length;
		var random = Math.floor(Math.random() * (max - min + 1)) + min;
		var theClass = classOptions[random];
		console.log(theClass);
		

		var mneumonicPathHelper = replaceSpaceWithUnderscore(phoneme.mneumonic);
		var id = phoneme.phoneme + '_' + phoneme.grapheme + '_' + mneumonicPathHelper;
		var html = '<a href="#" class="" id="' + id + '"><h2 class="letter-room-h2 '+ theClass + '">' + phoneme.phoneme + '</h2></a>';
		console.log(html);
		$('div.letter-container-div').append(html);
		
		
	}
}

