$(document).ready(function(){
	console.log('ready');
	addLinkToAllWords('the cake is in nat');
	$('.story-text a').click(activateReadingPad);
});