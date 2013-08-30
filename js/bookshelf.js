
$(document).ready(function(){
	$('.page-title-bg').fadeIn(3000);
	drawBooksOntoBookshelf();
	var sentence = storyOneData[0].text;
	console.log(sentence);
	addLinkToAllWords(sentence);
	$('.story-text a').click(activateReadingPad);
	$('.book-cover-div a').click(addContentToStoryPageScreen);
});

function drawBooksOntoBookshelf(){
	console.log(stories);
	var storiesLength = stories.length - 1;
	var i;
	for(i = 0 ; i < storiesLength ; i++){
	var story = stories[i];
	console.log(story.id);
	var html = '<div class="book-cover-div" id="book-' + story.id + '"><a href="#" data-story="'+ story.id +'"><img src="resources/storyart/book_cover_art/story_book_cover_' + story.id + '.png"></a></div>';
	$('div.bookshelf-div-container').append(html);
	}
}

function addContentToStoryPageScreen(){

	// Identify the story object and its content when it is clicked
	var storyId = $(this).data('story');
	var storiesLength = stories.length;
	var i;
	for( i = 0 ; i < storiesLength ; i++){
		if(stories[i].id === storyId){
			story = stories[i];
		}
	}
	console.log(storyId);
	console.log(story);

	// Hide the bookshelf html upon click on a book

	$('.bookshelf-container').hide();

	// Create the div template to add the story text into

	$('.bookshelf-page .story-page').show();

	// Need to add previous and next buttons to redraw the html
	// Need to get artwork and sentence audio working dynamically

}
