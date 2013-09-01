
$(document).ready(function(){
	$('.page-title-bg').fadeIn(3000);
	drawBooksOntoBookshelf();
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
	// Loop over all the stories in data-set and find the one with id that was clicked - set that story to story variable
	for( i = 0 ; i < storiesLength ; i++){
		if(stories[i].id === storyId){
			story = stories[i];
		}
	}
	console.log(storyId);
	console.log('This is the story');
	console.log(story);
	

	// Find the appropriate sentence and display on screen

	// Find total number of storypage objects across all stories

	var storyPagesLength = storyPageData.length-1;
	console.log('This is storyPagesLength value');
	console.log(storyPagesLength);
	// Loop through all storypages objects and put all those with the same story_id into array called storyPages
	var i;
	var storyPages =[];
	for( i = 0 ; i < storyPagesLength ; i++){
		if(storyPageData[i].story_id === storyId){
			storyPages.push(storyPageData[i]);
		}
	}

	// Log the result of that array
	console.log('This is array of story pages');
	console.log(storyPages);
	
	// if currentPageNumber < total page number { display next }
	// if currentPageNumber > 0 { display previous }
	// if currentPageNumber === total page number { display end }

	var thisStoryPagesLength = storyPages.length;
	console.log('This is the number of story pages for this story');
	console.log(thisStoryPagesLength);
	var currentPageNumber = 0;
	var nextPageNumber = currentPageNumber + 1;
	var previousPageNumber = currentPageNumber - 1;

	// add next/previous buttons in the html
	var linkHtmlNext = '<a href="#" id=" " data-pagenumber="'+nextPageNumber+'" class="next-page">next</a>';
	var linkHtmlPrevious = '<a href="#" id=" " data-pagenumber="'+previousPageNumber+'" class="previous-page">next</a>';

	// Set the links with their data

	if(currentPageNumber < thisStoryPagesLength){
		console.log('We need a next button!!');
		$('.story-page').append(linkHtmlNext);
	}
	else if(currentPageNumber > 0){
		console.log('We need a previous button!!');
		$('.story-page').append(linkHtmlPrevious);
	}
	else if(currentPageNumber === thisStoryPagesLength){
		console.log('DISPLAY END OF STORY PAGE');
	}

	// Create function to change currentPageNumber according to next/previous data attribute

	function increaseCurrentPageNumberVariable(){
		currentPageNumber = currentPageNumber + 1;
		console.log('this is current page number plus one');
		console.log(currentPageNumber);
		return currentPageNumber;
	}

	function decreaseCurrentPageNumberVariable(){
		currentPageNumber = currentPageNumber - 1;
		console.log('this is current page number plus one');
		console.log(currentPageNumber);
		return currentPageNumber;
	}

	$('.next-page').click(increaseCurrentPageNumberVariable);

	$('.previous-page').click(decreaseCurrentPageNumberVariable);

	// console.log('this is current page number plus one outside function when next link clicked');
	// console.log(currentPageNumber);

	// The sentence array number comes from currentPageNumber variable

	var sentence = storyPages[currentPageNumber].text;
	console.log('this is story object');
	console.log(story);
	console.log('this is the sentence');
	console.log(sentence);
	addLinkToAllWords(sentence);

	var imagePath = storyId + '_' + currentPageNumber + '.png';
	console.log('This is the image path');
	console.log(imagePath);
	

	// Hide the bookshelf html upon click on a book

	$('.bookshelf-container').hide();

	// Create the div template to add the story text into

	$('.bookshelf-page .story-page').show();

	// CHANGE THE SYNTAX TO MAKE THIS WORK
	$('.story-page').css('background','hello');

	// Need to get sentence audio working dynamically
	// Need to get text etc. to redraw upon next click based on data-attribute on the next/previous button
}
