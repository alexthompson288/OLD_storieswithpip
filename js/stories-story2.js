$(document).ready(function(){
	console.log('ready');
	addLinkToAllWords('the pin is in nat');
	$('.story-text a').click(activateReadingPad);
});