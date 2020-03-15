function check(){

var question1 = document.quizz.question1.value;
var question2 = document.quizz.question2.value;
var question3 = document.quizz.question3.value;
var correct = 0;
   

   if (question1 == "Providence") {
       correct++;
}
   if (question2 == "Tokyo") {
      correct++;
}
   if (question3 == "Nairobi") {
       correct++;
   }

var messages = ["Great job!", "That's just okey", "You really need to do better"];
var pictures = ["img/win.gif", "img/loss.gif", "img/los.gif"]

var range;

   if (correct < 1) {
      range = 2;
   }
   
   if (correct > 0 && correct < 3) {
      range = 1;
   }

   if (correct > 2) {
      range = 0;
   }


document.getElementById("after_submit").style.visibility = "visible";



document.getElementById("message").innerHTML = messages [range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("picture").src = pictures[range];
}