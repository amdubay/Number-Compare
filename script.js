window.onload = function () {

	let score = 0;
	let appendScore = document.getElementById("score");

	let corr = 0;
	let appendCorr = document.getElementById("corr");

	let wron = 0;
	let appendWron = document.getElementById("wron");

	let question = "greator";
	let appendQuestion = document.getElementById("question");
	let buttonLeft = document.getElementById('button-left');
	let buttonRight = document.getElementById('button-right');
	let buttonNext = document.getElementById('button-next');
	let appendLeft = document.getElementById("left")
	let appendRight = document.getElementById("right")
	let quest = 0
	let left = 0
	let right = 0

  selectQuestion();
   function selectQuestion() {
	quest = getRandomInt(0,1)
	if(quest == 0) {
	question = "greater"
	}
	else {
	question = "less"
	}
	appendQuestion.innerHTML = question

}

  
  
  function getRandomInt(min, max) {
     min = Math.ceil(min);
     max = Math.floor(max);
     return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
    

buttonNext.onclick = function(){runTime()}

	function runTime() {

		selectQuestion()
		//appendRight.innerHTML = quest
		left = getRandomInt(1,100);
		right = getRandomInt(1,100);
		appendLeft.innerHTML = left;
		appendRight.innerHTML = right;
		appendScore.innerHTML = score;
		appendCorr.innerHTML = corr;
		appendWron.innerHTML = wron;
		
	if(quest == 0) {
		if(left > right) {
			buttonLeft.onclick = function(){alert("Correct!"); score++; corr++; runTime()}
			buttonRight.onclick = function(){alert("Wrong!"); score--; wron++;  runTime()}
			
			}
		else {
			buttonLeft.onclick = function(){alert("Wrong!"); score--; wron++;  runTime()}
			buttonRight.onclick = function(){alert("Correct!"); score++; corr++; runTime()}
			
			}
		
	}

	else {
		if(left < right) {
			buttonLeft.onclick = function(){alert("Correct!"); score++; corr++; runTime()}
			buttonRight.onclick = function(){alert("Wrong!"); score--; wron++; runTime()}
			
			}
		else {
			buttonLeft.onclick = function(){alert("Wrong!"); score--; wron++; runTime()}
			buttonRight.onclick = function(){alert("Correct!"); score++; corr++; runTime()}
			
			}
		
	}




	}



	
	
		




  

}
