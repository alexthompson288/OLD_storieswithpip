
var currentPageNumber = 0;


	// console.log('word set in the html is '+word);


$(document).ready(function(){

	$('.page-title-bg').fadeIn(3000);
	drawBooksOntoBookshelf();
	// $('.story-text a').click(activateReadingPad);
	console.log('these are the word link elements object');
	console.log($('#story-text-id h1 a'));
	$('.book-cover-div a').click(setStoryPageContent);
		
	$('.next-page').click(function(){
		currentPageNumber = $(this).data('pagenumber');
		console.log('current page number is now...');
		console.log(currentPageNumber);
		clearAllContentFromScreen();
		drawAllPageContentToScreen(currentPageNumber);
	});

});


function drawBooksOntoBookshelf(){
	console.log(stories);
	var storiesLength = stories.length - 1;
	var i;
	for(i = 0 ; i < storiesLength ; i++){
		var story = stories[i];
		var sparkleAudioString = "'sparkleAudio'";
		var sparkleAudioStart = 'onClick="EvalSound(' + sparkleAudioString +')"';
		console.log(sparkleAudioStart);
		console.log(story.id);
		if(i > 2){
			$('.ipad-container').css('height', '1395px');
			$('.bookshelf-container').css('background-image', 'url("resources/other/book_stories_browser_bg_two_rows.png")');
			var html = '<div class="book-cover-div book-cover-div-extra-margin" id="book-' + story.id + '"><a href="#" data-story="'+ story.id +'" ' + sparkleAudioStart + '><img src="resources/storyart/book_cover_art/story_book_cover_' + story.id + '.png"></a></div>';
		}
		else{

			var html = '<div class="book-cover-div" id="book-' + story.id + '"><a href="#" data-story="'+ story.id +'" ' + sparkleAudioStart + '><img src="resources/storyart/book_cover_art/story_book_cover_' + story.id + '.png"></a></div>';
		}
		$('div.bookshelf-div-container').append(html);
	}
}

function clearAllContentFromScreen(){
		$('.story-page h1').text('');
		$('.story-text h1').empty();
		
	}

var storyPages =[];
function setStoryPageContent(){
	// Find the right story when the book cover is clicked
	$('.ipad-container').css('height', '768px');
	var storyId = $(this).data('story');
	var storiesLength = stories.length;
	var story;
	console.log('story id is ...');
	console.log(storyId);

	
	// Loop over all the stories in data-set and find the one with id that was clicked - set that story to story variable
	for( var i = 0 ; i < storiesLength ; i++){
		if(stories[i].id === storyId){
			story = stories[i];
		}
	}

	console.log('story object is ...');
	console.log(storyId);
	// $('#story-page-id').data("currentstorynumber", storyId);
	
	// Find the matching story pages
	// Find total number of storypage objects across all stories

	var storyPagesLength = storyPageData.length-1;
	console.log('length of storyPages is ' + storyPagesLength);
	// Loop through all storypages objects and put all those with the same story_id into array called storyPages
	var i;
	
	for( i = 0 ; i <= storyPagesLength ; i++){
		if(storyPageData[i].story_id === storyId){
			storyPages.push(storyPageData[i]);
		}
	}
	// Log the result of that array
	console.log('This is array of story pages');
	console.log(storyPages);
	console.log('this is current page number');
	console.log(currentPageNumber);
	var currentStoryPage = storyPages[currentPageNumber];
	


	
	console.log('this is current page number');
	console.log(currentPageNumber);

	// Draw first page
	drawAllPageContentToScreen(currentPageNumber);

	// Draw subsequent pages
	
	
	console.log('current page number is now ...');
	console.log(currentPageNumber);

	// function increaseCurrentPageNumber(currentPageNumber){
	// 	currentPageNumber = currentPageNumber + 1;
	// 	console.log('current page number is...');
	// 	console.log(currentPageNumber);
	// 	return currentPageNumber;
	// }

}
	
function drawAllPageContentToScreen(currentPageNumber){
	console.log('Anmol wants to see current page number' + currentPageNumber);
	drawWordsToScreen();
	console.log('Anmol wants to see current page number after drawing words' + currentPageNumber);
	drawBackgroundToScreen();
	console.log('Anmol wants to see current page number after bg' + currentPageNumber);
	addLinksToScreen();
	console.log('Anmol wants to see current page number afte rlinks' + currentPageNumber);
	console.log('this is current page number');
	console.log($('#story-text-id').data("currentpagenumber"));
	addAudioToWholeSentenceButton();


	function addAudioToWholeSentenceButton(){
	var sentence = storyPages[currentPageNumber].audio;
	// adds audio for the play button
	$('#playWholeSentence').attr('src','resources/audio/sentences/' + sentence + '.wav');
	// console.log('word set in the html is '+word);
}

	function addLinksToScreen(){
		// add next/previous buttons in the html
		var thisStoryPagesLength = storyPages.length -1;
		var nextPageNumber = currentPageNumber +1;
		var previousPageNumber = currentPageNumber -1;
		$('#next-page').data('pagenumber', nextPageNumber);
		$('#previous-page').data('pagenumber', previousPageNumber);

		// var linkHtmlNext = '<a href="#" id="next-page" data-pagenumber="'+nextPageNumber+'" class="next-page">next</a>';
		// var linkHtmlPrevious = '<a href="#" id="next-page" data-pagenumber="'+previousPageNumber+'" class="previous-page">previous</a>';

		// Set the links with their data

		if(currentPageNumber === thisStoryPagesLength){
			console.log('We need a next button!!');
			
			$('#next-page').hide();
			$('#finish-page').show();
		}
		else{
			$('#next-page').show();
		}
		

		if(currentPageNumber === 0){
			console.log('We do not need a previous button!!');
			$('#previous-page').hide();
		}
		else{
			$('#previous-page').show();
		}

		// Create function to change currentPageNumber according to next/previous data attribute

	}

	// console.log('this is current page number plus one outside function when next link clicked');
	// console.log(currentPageNumber);

	// The sentence array number comes from currentPageNumber variable
	function drawWordsToScreen(){
		var sentence = storyPages[currentPageNumber].text;
		addLinkToAllWords(sentence);
		$('#story-text-id').data("currentpagenumber", currentPageNumber);
		console.log('look here');
		console.log($('.story-text').data("currentstorypagenumber"));
		
	}

	function drawBackgroundToScreen(){
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
	// Hide the bookshelf html upon click on a book
	$('.bookshelf-container').fadeOut();
	// Create the div template to add the story text into
	$('.bookshelf-page .story-page').fadeIn();
	

	// CHANGE THE SYNTAX TO MAKE THIS WORK

	// This is where words get broken up and added to reading pad
	$('.story-text a').click(activateReadingPad);

}	
	
	
	
	// Need to get sentence audio working dynamically
	// Need to get text etc. to redraw upon next click based on data-attribute on the next/previous button

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

	// function logCurrentPageNumber(currentPageNumber){
	// 	alert('button clicked');
	// 	console.log(currentPageNumber);
	// }

	// $('.next-page').click(increaseCurrentPageNumberVariable(currentPageNumber));

	// $('.previous-page').click(decreaseCurrentPageNumberVariable(currentPageNumber));

