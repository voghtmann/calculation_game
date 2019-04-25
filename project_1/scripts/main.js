        //Initialisation
        var userAnswer = "";
        var answer = "";
        var lives = 3;
        var score = 0;
        var timeleft = 115;
        var questionNum = 0;


        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  

        document.getElementById("btnStartGame").addEventListener("click", getLevel, false);
        document.getElementById("btnEnterAnswer").addEventListener("click", playGame, false);
        document.getElementById("btnReplay").addEventListener("click", replay, false);
        document.getElementById("finishLink").addEventListener("click", exitApp(), false);

        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  


        function getLevel() {
        	var selector = document.getElementById("difficulty");
        	var value = selector[selector.selectedIndex].value;
        	console.log(value);
        	console.log(typeof (value));
        	selectArray(value);
        	startProgressBar();
        	feedBackMsg(value);
        }


 
        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  

        function updateLifeDisplay() {
        	var localLives = lives;
        	console.log("lives in updateLifeDisplay " + localLives);
        	var life_1 = document.getElementById("lifeBox1");
        	var life_2 = document.getElementById("lifeBox2");
        	if (lives == 2) {
        		life_1.style.display = "none";
        	} else if (lives == 1) {
        		life_1.style.display = "none";
        		life_2.style.display = "none";
        	} else {
        		console.log("This is Working");
        	}
        }

        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 

        function selectArray(getLevel) {
        	console.log("SA: " + getLevel);
        	if (getLevel == "1") {
        		selectedArray = [{
        			quest: "5 * 8 =",
        			ans: 40
                }, {
        			quest: "56 + 8 =",
        			ans: 64
                }, {
        			quest: "45 - 15 =",
        			ans: 30
                }, {
        			quest: "3 * 7 =",
        			ans: 21
                }, {
        			quest: "22 / 2 =",
        			ans: 11
                }, {
        			quest: "13 + 18 =",
        			ans: 31
                }, {
        			quest: "57 - 5 =",
        			ans: 52
                }, {
        			quest: "9 * 7 =",
        			ans: 63
                }, {
        			quest: "57 / 3 =",
        			ans: 19
                }, {
        			quest: "72 + 12 =",
        			ans: 84
                }, {
        			quest: "89 - 6 =",
        			ans: 83
                }, {
        			quest: "4 * 8 =",
        			ans: 32
                }, {
        			quest: "33 / 11 =",
        			ans: 3 
                }, {
        			quest: "35 + 8 =",
        			ans: 43
                }, {
        			quest: "65 - 10 =",
        			ans: 55
                }, {
        			quest: "7 * 7 =",
        			ans: 49
                }, {
        			quest: "64 / 2 =",
        			ans: 32
                }, {
        			quest: "31 + 12 =",
        			ans: 43
                }, {
        			quest: "64 - 20 =",
        			ans: 44
                }, {
        			quest: "5 * 6 =",
        			ans: 30
                }, {
        			quest: "16 / 4 =",
        			ans: 4
                }, {
        			quest: "67 + 2 =",
        			ans: 69    
                }];
        		console.log("level 1 choosen");
        	} else if (getLevel == "2") {
        		selectedArray = [{
        			quest: "15 * 8",
        			ans: 120
        		}, {
        			quest: "256 + 16",
        			ans: 272
        		}, {
        			quest: "453 - 105",
        			ans: 348
                }, {
        			quest: "31 * 7 =",
        			ans: 217
                }, {
        			quest: "222 / 2 =",
        			ans: 111
                }, {
        			quest: "56 + 78 =",
        			ans: 134
                }, {
        			quest: "145 - 85 =",
        			ans: 60
                }, {
        			quest: "24 * 50 =",
        			ans: 1200
                }, {
        			quest: "360 / 20 =",
        			ans: 18
                }, {
        			quest: "561 + 80 =",
        			ans: 641
                }, {
        			quest: "450 - 157 =",
        			ans: 293
                }, {
        			quest: "52 * 7 =",
        			ans: 364
                }, {
        			quest: "440 / 20 =",
        			ans: 22 
                }, {
        			quest: "565 + 82 =",
        			ans: 647
                }, {
        			quest: "345 - 153 =",
        			ans: 192
                }, {
        			quest: "42 * 7 =",
        			ans: 294
                }, {
        			quest: "427 / 7 =",
        			ans: 61
                }, {
        			quest: "216 + 81 =",
        			ans: 297
                }, {
        			quest: "256 - 99 =",
        			ans: 157
                }, {
        			quest: "9 * 98 =",
        			ans: 882
                }, {
        			quest: "720 / 40 =",
        			ans: 18
                }, {
        			quest: "180 / 30 =",
        			ans: 6    
        		}];
        		//              selectedArray = [1, 2, 3, 4, 5];
        		console.log("level 2 choosen");
        	} else {
        		selectedArray = [{
        			quest: "55 * 28",
        			ans: 1540
                }, {
        			quest: "336 + 128",
        			ans: 434
                }, {
        			quest: "237 - 156",
        			ans: 81
                }, {
        			quest: "31 * 21",
        			ans: 651
                }, {
        			quest: "720 / 30",
        			ans: 180
                 }, {
        			quest: "34 * 87 =",
        			ans: 2958
                }, {
        			quest: "340 / 17 =",
        			ans: 20
                }, {
        			quest: "576 + 128 =",
        			ans: 704
                }, {
        			quest: "453 - 115 =",
        			ans: 338
                }, {
        			quest: "34 * 45 =",
        			ans: 1530
                }, {
        			quest: "73 * 47 =",
        			ans: 3431
                }, {
        			quest: "976 * 8 =",
        			ans: 7808
                }, {
        			quest: "745 - 195 =",
        			ans: 550
                }, {
        			quest: "83 * 75 =",
        			ans: 6225
                }, {
        			quest: "41 * 39 =",
        			ans: 1599
                }, {
        			quest: "562 + 87 =",
        			ans: 649
                }, {
        			quest: "785 - 357 =",
        			ans: 428
                }, {
        			quest: "46 * 32 =",
        			ans: 1472
                }, {
        			quest: "56 * 57 =",
        			ans: 3192
                }, {
        			quest: "563 + 989 =",
        			ans: 1552
                }, {
        			quest: "452 - 154 =",
        			ans: 298
                }, {
        			quest: "38 * 24 =",
        			ans: 912
                }, {
        			quest: "224 - 162 =",
        			ans: 62
                }, {
        			quest: "67 * 55 =",
        			ans: 3685   
                }];   
        		console.log("level 3 choosen");
        	}
        	document.getElementById("outerOpeningScreen").style.display='none';
        	//switch on outerGamePlayScreen
        	outerGamePlayScreen.style.display='block';
        	console.log(selectedArray);
        	shuffle(selectedArray);

        }

        //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        function shuffle(selectedArray) {
        	console.log("shuff" + selectedArray);
        	var counter = selectedArray.length,
        		temp, index;

        	while (counter > 0) {
        		index = Math.floor(Math.random() * counter);

        		counter--;
        		temp = selectedArray[counter];
        		selectedArray[counter] = selectedArray[index];
        		selectedArray[index] = temp;
        	}
        	console.log(selectedArray);

        	displayQuestion(selectedArray);

        	startTimer();
        }

        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  


        function playGame() {


        	userAnswer = document.getElementById("enterAnswer").value;


        	console.log("The users answer for question " + questionNum + " is " + userAnswer);
        	checkAnswer(answer, userAnswer);

        	//check lives and if no more lives game is over GAME END
        	if (lives < 1) {
        		console.log("Out of lives - your game is finished");
        		document.getElementById("lives").textContent = "You're out of lives!";
        		gameEnd();
        	} else {
        		//updateScore()
        		displayQuestion(selectedArray);
        	}
        	$('#enterAnswer').val('');

        }

        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  

        function displayQuestion(selectedArray) {


        	var question = selectedArray[questionNum].quest;
        	answer = selectedArray[questionNum].ans;
        	document.getElementById('display').innerHTML = question;
        	console.log("The question is " + question);
        	console.log("The answer is " + answer);
        	console.log(typeof ("The type of answer is " + answer));

        	questionNum = questionNum + 1;
        	console.log(questionNum);
        	document.getElementById("lives").textContent = "Lives: ";
        	document.getElementById("score").textContent = "Your score is:  " + score;
        	return answer;
        }

        // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        function checkAnswer(answer1, userAnswer1) {
        	$('#feedback').show()
        	console.log("checkAnswer userAnswer " + userAnswer1);
        	console.log("checkAnswer actual answer " + answer1);

        	if (userAnswer1 == answer1) {
        		document.getElementById('feedback').innerHTML = ("<img src='images/correct.png' width= '100px' height='100px'>");
        		score += 1;
        	} else {
        		document.getElementById('feedback').innerHTML = ("<img src='images/incorrect.png' width='100px' height='100px'>");
        		lives--;
        	}

        	console.log("Current score: " + score);
        	console.log("current lives: " + lives);
        	updateLifeDisplay(lives);
        	$('#feedback').fadeOut(1500)


        }
        //         XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX  

        function startTimer() {
        	timeleft = 115;

        	var downloadTimer = setInterval(function () {
        		timeleft--;
//        		document.getElementById("countdowntimer").textContent = "You have " + timeleft + " seconds left";
        		if (timeleft == 0) {
        			console.log("Time is up - your game is finished");
        			document.getElementById("countdowntimer").textContent = "Your time is up !";
        			gameEnd(); //TIME IS UP GAME END
        		}

        		if (timeleft <= 0) clearInterval(downloadTimer);
        	}, 1000);

        }


        //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        function gameEnd() {
        	document.getElementById("outerGamePlayScreen").style.display='none';
        	//switch on endGame
        	outerEndScreen.style.display='block';
        	feedBackMsg(score);
        }

        function feedBackMsg() {
        	var msg = "";
        	console.log("score in feebackfunction: " + score)
        	//            console.log("level in feebackfunction: " + value)
        	if (score > 12) {
        		msg = "This is fantastic. I can tell you've been practising. Time to move up a level!";
        	} else if (score > 10) {
        		msg = "Keep at it - you're doing great!";
        	} else if (score > 8) {
        		msg = "You're starting to get the hang of this, but I know you can do better.";
        	} else if (score > 6) {
        		msg = "If you work on the this a bit more you'll get there!";
        	} else if (score > 4) {
				msg = "Now we're starting to get somewhere! Now let's work on your speed. ";
        	} else if (score > 2) {
				msg = "Not a bad effort, but I know there's more to come from you!";
        	} else {
        		msg = "Ok...That didn't go too well, but it's just a case of practising so don't give up!";
        	}
        	txtEndMessage.innerHTML = 'Your final score is: ' + score + "...." + msg;
        }

        function replay() {
        	location.reload();
        }

        function exitApp() {
        	self.close();
        }


        function startProgressBar() {
        	console.log("Progress Bar function invoked");

        	progress(115, 115, $('#progressBar'));


        }

        //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

        function progress(timeleft, timetotal, $element) {
        	var progressBarWidth = timeleft * $element.width() / timetotal;
        	$element.find('div').animate({
        		width: progressBarWidth
        	}, 1000).html(Math.floor(timeleft / 60) + ":" + timeleft % 60);
        	if (timeleft > 0) {
        		setTimeout(function () {
        			progress(timeleft - 1, timetotal, $element);
        		}, 1000);
        	}
        }
