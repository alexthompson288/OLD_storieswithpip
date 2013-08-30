$(document).ready(function(){
	console.log('ready');
	addLinkToAllWords('pip pit tap pat rat bat cat dog pain');
	randomClassOnWordBank();
	$('.story-text a').click(activateReadingPad);
});

function randomClassOnWordBank(){
	var numberOfWords = $('div.story-text h1 a').length - 1;
	var linkToTarget = $('div.story-text h1');
	console.log('hello');
	var i;
	console.log(numberOfWords);
	console.log(linkToTarget);
	
	
	// console.log('this is' + firstWord.word);
	// var r = Math.random(between 0 and 2);
	var min = 0;
	var max = 3-1;

	
	// and the formula is:
	
	
	var classOptions = ['word-bank-bg-green','word-bank-bg-purple','word-bank-bg-yellow'];
	
	for(i = 0 ; i < numberOfWords ; i++){
		var random = Math.floor(Math.random() * (max - min + 1)) + min;
		
		var specificLinkToTarget = $(linkToTarget[i]);
		
	}
}

