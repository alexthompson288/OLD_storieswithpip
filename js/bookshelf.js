
$(document).ready(function(){
	$('.page-title-bg').fadeIn(3000);
	drawBooksOntoBookshelf();
	// $('.story-text a').click(activateReadingPad);
	console.log('these are the word link elements object');
	console.log($('#story-text-id h1 a'));
	$('.book-cover-div a').click(addPageContentToStoryPageScreen);
	$('next-page').click(addNextPageToScreen(currentPageNumber));
	
});

function addNextPageToScreen(currentPageNumber){
		currentPageNumber = $('.next-page').data('pagenumber');
		console.log('this is the new currentPageNumber');
		console.log(currentPageNumber);
		addPageContentToStoryPageScreen();
}



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

function addPageContentToStoryPageScreen(){
	// Find the right story when the book cover is clicked
	var storyId = $(this).data('story');
	var storiesLength = stories.length;
	var i;
	// Loop over all the stories in data-set and find the one with id that was clicked - set that story to story variable
	for( i = 0 ; i < storiesLength ; i++){
		if(stories[i].id === storyId){
			story = stories[i];
		}
	}
	var story = story;
	// Find the matching story pages
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

	var thisStoryPagesLength = storyPages.length;
	console.log('This is the number of story pages for this story');
	console.log(thisStoryPagesLength);
	var firstPage = storyPages[0];
	var currentPageNumber = 0;
	var nextPageNumber = currentPageNumber + 1;
	var previousPageNumber = currentPageNumber - 1;

	drawWordsToScreen(currentPageNumber);
	drawBackgroundToScreen(currentPageNumber);
	addLinksToScreen(currentPageNumber);
	$('next-page').click(addNextPageToScreen);

	



	function addLinksToScreen(currentPageNumber){
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

	}

	// console.log('this is current page number plus one outside function when next link clicked');
	// console.log(currentPageNumber);

	// The sentence array number comes from currentPageNumber variable
	function drawWordsToScreen(currentPageNumber){
		var sentence = storyPages[currentPageNumber].text;
		console.log('this is story object');
		console.log(story);
		console.log('this is the sentence');
		console.log(sentence);
		addLinkToAllWords(sentence);
		$('.story-text').data('currentstorypagenumber', 'hello');
	}

	function drawBackgroundToScreen(currentPageNumber){
		var imagePath = 'resources/storyart/' + storyId + '_' + currentPageNumber + '.jpg';
		console.log('This is the image path');
		console.log(imagePath);
		$('.story-page').css('background-image', 'url(' + imagePath + ')');
	}	
	
	
	// Hide the bookshelf html upon click on a book
	$('.bookshelf-container').fadeOut();
	// Create the div template to add the story text into
	$('.bookshelf-page .story-page').fadeIn();
	

	// CHANGE THE SYNTAX TO MAKE THIS WORK

	// This is where words get broken up and added to reading pad
	$('.story-text a').click(activateReadingPad);

	// Need to get sentence audio working dynamically
	// Need to get text etc. to redraw upon next click based on data-attribute on the next/previous button
}
