// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function(){
    var right="";
    right=$("#input").val()
    $("#userChoice").html(right)
    var random=Math.random();
var choice;
if(random<.33){
    choice="rock";
}
else if(random < .66){
    choice="scissors"
}
else {
    choice="paper"
}
})






// DOCUMENT READY FUNCTION BELOW

