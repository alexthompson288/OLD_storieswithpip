$(document).ready(function(){
	console.log('ready');
	var totalWords = $('h1 a');
	var totalWordsCount = totalWords.size();
	console.log('total words is ' + totalWordsCount);
	// $('.story-text a').click(activateReadingPad);
	for(var i=0 ; i <= totalWordsCount ; i++){
		var min = 0;
		var max = 2;
		// and the formula is:
		var classOptions = ['word-bank-bg-green','word-bank-bg-purple','word-bank-bg-yellow'];
		var numberOfOptions = classOptions.length;
		var random = Math.floor(Math.random() * (max - min + 1)) + min;
		var theClass = classOptions[random];
		console.log(theClass);
		$('h1 a').eq(i).addClass(theClass);
	}
});