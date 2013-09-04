
$(document).ready(function(){

	var totalNav = $('h2');
	var totalNavCount = totalNav.size();
	console.log('totalnav is ' + totalNavCount);
	// $('.story-text a').click(activateReadingPad);
	for(var i=0 ; i <= totalNavCount ; i++){
		var min = 0;
		var max = 2;
		// and the formula is:
		var classOptions = ['word-bank-bg-green','word-bank-bg-purple','word-bank-bg-yellow'];
		var numberOfOptions = classOptions.length;
		var random = Math.floor(Math.random() * (max - min + 1)) + min;
		var theClass = classOptions[random];
		console.log(theClass);
		$('h2').eq(i).addClass(theClass);
	}
});