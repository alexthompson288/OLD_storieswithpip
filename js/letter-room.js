
idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval("timerIncrement()", 1000); // 1 minute

    //Zero the idle timer on mouse movement.
    $('html').mousemove(function (e) {
        idleTime = 0;
    });
    $('html').keypress(function (e) {
        idleTime = 0;
    });
})
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 3) { // 20 minutes
        $('#mnemonic-div').fadeOut();
    }
}



$(document).ready(function(){
	console.log('letter room si ready');
	console.log(single_letter_phonemes[1].phoneme);
	createPhonemesDivs();
	$('.letterroom-letter-container-div a h2').click(function(){
		$('#mnemonic-div').show();
		$('#mnemonic-text').empty();
		$('mnemonic-image').attr('src','');
		var grapheme = $(this).data('grapheme');
		console.log('grapheme is ' + grapheme);
		var PhonemesLength = single_letter_phonemes.length;
		for(var i = 0 ; i < PhonemesLength ; i++){
			if( grapheme === single_letter_phonemes[i].phoneme){
				var phonemeObject = single_letter_phonemes[i];	
			}	 
		}
		var phoneme = phonemeObject.phoneme;
		var mnemonicText = phonemeObject.phoneme + ' for ' + phonemeObject.mneumonic;
		var mnemonicImagePath = 'resources/mnemonics/' + phonemeObject.phoneme + '_' + phonemeObject.mneumonic.replace(' ','_') + '.png';
		var mnemonicAudioPath = 'resources/audio/mnemonics/benny_mnemonic_' + phonemeObject.phoneme + '_' + phonemeObject.grapheme + '_' + phonemeObject.mneumonic.replace(' ','_') + '.wav'
		$('#playMnemonic').attr('src',mnemonicAudioPath);
		$('#mnemonic-text').text(mnemonicText);
		$('#mnemonic-image').attr('src',mnemonicImagePath);
		$('#mnemonic-div').show();

	});
});

function EvalSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
 }

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
		var max = 6-1;
		// and the formula is:
		var classOptions = ['letter-room-bg-green','letter-room-bg-purple','letter-room-bg-yellow', 'letter-room-bg-white-black', 'letter-room-bg-pink-red', 'letter-room-bg-green-green'];
		var numberOfOptions = classOptions.length;
		var random = Math.floor(Math.random() * (max - min + 1)) + min;
		var theClass = classOptions[random];
		console.log(theClass);
		

		var mneumonicPathHelper = replaceSpaceWithUnderscore(phoneme.mneumonic);
		var id = phoneme.phoneme + '_' + phoneme.grapheme + '_' + mneumonicPathHelper;
		var playMnemonic = "'playMnemonic'";
		var html = '<div class="letterroom-letter-container-div"><a href="#" class="" id="' + id + '"onClick="EvalSound('+playMnemonic+')"><h2 class="letter-room-h2 '+ theClass + '" data-grapheme="' + phoneme.phoneme + '">' + phoneme.phoneme + '</h2></a></div>';
		console.log(html);
		$('div.letter-container-div').append(html);
		
	}
}

