
$(document).ready(function(){
	$('.page-title-bg').fadeIn(3000);
	drawBooksOntoBookshelf();
	// $('.story-text a').click(activateReadingPad);
	console.log('these are the word link elements object');
	console.log($('#story-text-id h1 a'));
	$('.book-cover-div a').click(setStoryPageContent);

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

function setStoryPageContent(){
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
	$('#story-page-id').data("currentstorynumber", storyId);
	
	// Find the matching story pages
	// Find total number of storypage objects across all stories

	var storyPagesLength = storyPageData.length-1;
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
	var currentPageNumber = 0;
	console.log('this is current page number');
	console.log(currentPageNumber);
	var currentStoryPage = storyPages[currentPageNumber];
	var nextPageNumber = currentPageNumber + 1;
	var previousPageNumber = currentPageNumber - 1;


	
	console.log('this is current page number');
	console.log(currentPageNumber);

	// Draw first page
	drawAllPageContentToScreen(currentPageNumber);

	// Draw subsequent pages
	$('#next-page').click(function(){
		var newPageNumber = $('#next-page').data('pagenumber');
		console.log('new page number is...');
		console.log(newPageNumber);
		clearAllContentFromScreen();
		drawAllPageContentToScreen(newPageNumber);
		currentPageNumber = newPageNumber;
		return currentPageNumber;
	});

	currentPageNumber = currentPageNumber;

	
	console.log('current page number is now ...');
	console.log(currentPageNumber);

	function increaseCurrentPageNumber(currentPageNumber){
		currentPageNumber = currentPageNumber + 1;
		console.log('current page number is...');
		console.log(currentPageNumber);
		return currentPageNumber;
	}

	function logCurrentPageNumber(currentPageNumber){
		alert('button clicked');
		console.log(currentPageNumber);
	}

	
	// $('#next-page').click(function(){
	// 	increaseCurrentPageNumber(currentPageNumber)
	// 	return currentPageNumber;
	// }
	// );

	// function increaseCurrentPageNumberVariable(currentPageNumber){
	// 		currentPageNumber = currentPageNumber + 1;
	// 		console.log('this is current page number plus one');
	// 		console.log(currentPageNumber);
	// 		return currentPageNumber;
	// 	}

	// function decreaseCurrentPageNumberVariable(currentPageNumber){
	// 	currentPageNumber = currentPageNumber - 1;
	// 	console.log('this is current page number plus one');
	// 	console.log(currentPageNumber);
	// 	return currentPageNumber;
	// }

	// $('.next-page').click(increaseCurrentPageNumberVariable(currentPageNumber));

	// $('.previous-page').click(decreaseCurrentPageNumberVariable(currentPageNumber));
	function clearAllContentFromScreen(){
		$('.story-page h1').text('');
		$('.story-text h1').empty();
		$('#next-page').remove();
	}
	
	function drawAllPageContentToScreen(currentPageNumber){
		drawWordsToScreen(currentPageNumber);
		drawBackgroundToScreen(currentPageNumber);
		addLinksToScreen(currentPageNumber);
		console.log('this is current page number');
		console.log($('#story-text-id').data("currentpagenumber"));
		function addLinksToScreen(currentPageNumber){
			// add next/previous buttons in the html
			var linkHtmlNext = '<a href="#" id="next-page" data-pagenumber="'+nextPageNumber+'" class="next-page">next</a>';
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

		}

		// console.log('this is current page number plus one outside function when next link clicked');
		// console.log(currentPageNumber);

		// The sentence array number comes from currentPageNumber variable
		function drawWordsToScreen(currentPageNumber){
			var sentence = storyPages[currentPageNumber].text;
			addLinkToAllWords(sentence);
			$('#story-text-id').data("currentpagenumber", currentPageNumber);
			console.log('look here');
			console.log($('.story-text').data("currentstorypagenumber"));
			
		}

		function drawBackgroundToScreen(currentPageNumber){
			// var imagePath = 'resources/storyart/' + storyId + '_' + currentPageNumber + '.jpg';
			var htmlForImagesStart = 'url("';
			var htmlForImagesEnd = '")';
			currentStoryPage = storyPages[currentPageNumber];
			var imagePath = 'resources/storyart/' + currentStoryPage.image;
			var totalHtmlForImages = htmlForImagesStart + imagePath + htmlForImagesEnd;
			console.log(totalHtmlForImages);
			
			console.log('This is the image path');
			console.log('url(' + imagePath + ')');
			$('.story-page').css('background-image', totalHtmlForImages);
		}
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
