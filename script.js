window.onload = function () {
  

  var score = 0;
  var appendScore = document.getElementById("score");

  var corr = 0;
  var appendCorr = document.getElementById("corr");

  var wron = 0;
  var appendWron = document.getElementById("wron");

  var question = "greator";
  var appendQuestion = document.getElementById("question");
  var buttonLeft = document.getElementById('button-left');
  var buttonRight = document.getElementById('button-right');
  var buttonNext = document.getElementById('button-next');
  var appendLeft = document.getElementById("left")
  var appendRight = document.getElementById("right")
  var quest = 0
  var left = 0
  var right = 0

  selectQuestion();
   function selectQuestion() {
	quest = getRandomInt(0,1)
	if(quest == 0) {
	question = "greater"
	}
	else {
	question = "lessor"
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