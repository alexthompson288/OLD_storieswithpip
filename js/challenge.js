<!-- // Choose level button
//  Open game frame 
//  Picture frames drop down
//  Fruit machine pops up
//  Instructions are read out
//  3...2...1. Go!
//  Fruitmachine function
    // Each letter is on a background
    // Play chaching audio
    // Word appears
    // Each phoneme has a sound button of correct size
    // Each sound button push plays sound of specific phoneme
    // Each sound button push changes state of button sprite
    // Each sound button push changes colour of letter background container
    // Each sound button push changes colour of letter
    


    
//  Choose correct image
//  Image goes to state B
//  Score number increases by 1
//  Background colour changes on the score circle
//  Timer sprite decreases position
//  


//  object of words with attributes:
//        phonemes
//        dummy/target
//  

 -->
 //For the number of times the button has been clicked.
var cnt = 0;

 var words = [ 

{


word: 'sun', 
phonemes: { 
'n':'n_n_naughty nose', 's':'s_s_sneaky snake', 'u':'uh_u_ugly umbrella' } 
} ,
 {

word: 'cat', 
phonemes: { 
'a':'a_a_angry ant', 'c':'ck_c_clumsy clown', 't':'t_t_terrible troll' } 
} , {
word: 'dog', 
phonemes: { 
'd':'d_d_dangerous dragon', 'g':'g_g_grinning goat', 'o':'o_o_odd octopus' } 
} ]


 function EvalSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
 }



                    


$(document).ready(function(){
		
 		$('.picture-frames').on('click', function(){
			event.preventDefault();
			checkCorrectWord(this);
		    $('#picture-frame-right').animate({'top':'-500px'},500);
		    $('#picture-frame-left').animate({'top':'-500px'},500);
		    $('#fruitmachine-body').animate({'bottom':'-560px'},500);
		    setUpScreen();
		});


 	if(document.getElementById("age").value != ""){
		$(".enter-button").click(function(){
	 	$('.comparison-container-box').hide();
	 	$('#game-frame').show();
	 	Main();
	 });
 	}
      
});




function Main(){
    
	$('#progress-bar').fadeIn(2500);
	console.log("score needs to be shown")
	$('#score').show().fadeIn(2500);
	setInterval(function(){
	 	$("#timer-progress-bar").animate({top: "+=0.1"}, {
            duration: 10,
			step: function( ){
				if((345- $('#timer-progress-bar').position().top) < 0) {
						var string_url = "index.html";
                       // var string_url = "measurelevel.html?" + "score="+cnt+"&age="+document.getElementById("age").value; 
                       window.location = string_url;
                }
			}
		});
	});    
	setUpScreen();
}



function setUpScreen(){
	
	$('#flash-message p').delay(500).fadeOut();
	$('#picture-frame-left').show().animate({'top':'0px'},1000,'easeOutBounce');
    $('#picture-frame-right').delay('500').show().animate({'top':'0px'},1000,'easeOutBounce');
    $('#fruitmachine-body').delay('500').show().animate({'bottom':'13px'},500);

	chooseCorrectWord();	
}

var chosenWords = [];
var correctWord;
var incorrectWord;

function chooseCorrectWord(){

	var min = 0;
	var max = words.length-1;
	
	// and the formula is:
	var random = Math.floor(Math.random() * (max - min + 1)) + min;

	correctWord = words[random].word;
	


	var random1 = Math.floor(Math.random() * (max - min + 1)) + min;

    var incorrectWord = words[random1].word;
   

	while(incorrectWord === correctWord){
		incorrectWord = words[Math.floor(Math.random() * (max - min + 1)) + min].word;
	}
	
	console.log(incorrectWord);
	console.log(correctWord);

	function writeWordsToFruitmachine(){
		
		
		var length = correctWord.length;
		
		for (var i=0; i<length; i++){
			var p = i+1;

			$('#word-container-'+ p +' p').text(correctWord[i]);
			
		}
	}



	function addImagesToFrames(){
		var sortedWords = [incorrectWord,correctWord]; 
		chosenWords = [];
		var first = Math.floor(Math.random()*2);
		chosenWords.push(sortedWords[first]);
		chosenWords.push(sortedWords[(first+1) %2]);
  		
  		console.log(chosenWords);

  		$('#game-image-left').attr('src','assets/game/game_images/_'+chosenWords[0]+'.png');
        $('#game-image-right').attr('src','assets/game/game_images/_'+chosenWords[1]+'.png');

        if(chosenWords[0] === correctWord){
        	$('#game-image-left').addClass("correct-answer-class");
        	$('#game-image-right').addClass("incorrect-answer-class");
        	console.log("Classes Added correct word on left");
        }else if(chosenWords[0] === incorrectWord){
        	$('#game-image-right').addClass("correct-answer-class");
        	$('#game-image-left').addClass("incorrect-answer-class");
        	console.log("Classes Added correct word on right");
        }
	}

	function addAudioToButtons(){

	$('#audio7').attr('src','assets/game/audio/'+correctWord+'.wav');
		 
	var length = correctWord.length;
		for (var i=0 ; i < length ; i++){
			var p = i+1;
			$('#audio'+p).attr('src','assets/game/audio/'+correctWord[i]+'.wav');
		}
    }


	addAudioToButtons();
	writeWordsToFruitmachine();
	addImagesToFrames();
	
}

function checkCorrectWord(objectClicked){
	
		if($(objectClicked).hasClass('correct-answer-class')){
			cnt++;
			if(cnt == 10){
				$('#score').css({'left' : "+=" + 10});
			}
			console.log("Correct!");
			console.log(cnt);
            $('#displayCounter').html(cnt);
			$('#flash-message p').text('Correct!').fadeIn();
		}else{
			console.log('incorrect message');
			$('#flash-message p').text('Wrong!').fadeIn();
		}
		
		console.log(correctWord);
		if(chosenWords[0] === correctWord){
    		$('#game-image-left').removeClass("correct-answer-class");
    		$('#game-image-right').removeClass("incorrect-answer-class");
    		console.log("Classes removed correct word on left");
    	}else{
    		$('#game-image-right').removeClass("correct-answer-class");
    		$('#game-image-left').removeClass("incorrect-answer-class");
    		console.log("Classes removed correct word on right");
    	}		
}





        
		// $('.incorrect-answer-class').on('click', function(){
		// 	console.log('incorrect message');
		// 	$('#flash-message p').text('Wrong!');

		// 	if(chosenWords[0] === correctWord){
  //       		$('#game-image-left').removeClass("correct-answer-class");
  //       		$('#game-image-right').removeClass("incorrect-answer-class");
  //       		console.log("Classes Removed");
  //       		console.log($('#game-image-left').hasClass("correct-answer-class"));
  //       		console.log($('#game-image-right').hasClass("incorrect-answer-class"));
  //       	}else{
  //       		$('#game-image-right').removeClass("correct-answer-class");
  //       		$('#game-image-left').removeClass("incorrect-answer-class");
  //       		console.log("Classes Removed");
  //       		console.log($('#game-image-left').hasClass("incorrect-answer-class"));
  //       		console.log($('#game-image-right').hasClass("correct-answer-class"));
  //       	}
					
		// });
		

