$(document).ready(function(){
	console.log('ready');
	var sentence = storyOneData[0].text;
	console.log(sentence);
	addLinkToAllWords(sentence);
	$('.story-text a').click(activateReadingPad);

});



function addContentToStoryPageScreen(){
	var storyId = $(this).data('story');
	var storiesLength = stories.length;
	var i;
	for( i = 0 ; i < storiesLength ; i++{
		if(stories[i].id === storyId){
			story = stories[i];
			return story;
		}
	}
	console.log(storyId);
	console.log(story);
}
