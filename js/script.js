// Push all of my question elements into an array for easy callback
var questions = $(".question_item > p").toArray();
var images = $(".container_CharacterPhoto > div").toArray();
var answers = $(".options > ul").toArray();
var i = 0;

var content = {
    question: $(questions[i]).show(),
    image: $(images[i]).show(),
    answer: $(answers[i]).show(),
    fill: function() {
        return 
        	$(questions[i]).show().siblings().hide(),
            $(images[i]).show().siblings().hide(),
            $(answers[i]).show().siblings().hide(),
            console.log(i);
    }
};

// .siblings().hide(),

console.log(questions.length);

// Log selections and then output score with correct/incorrent answers

$(document).ready(function() {
    console.log("working");
    $(".navigateForward").click(function() {
        // if (i>=0 && i < 4) {
            i += 1;
        	content.fill();
        	console.log(content.fill());
	    // };
        console.log(i);
        console.log("march forward!");
    });

    $(".navigateBack").click(function() {

        if (i=0){
        	content.fill();
        	console.log(i)
        } 
        else if (i > 0 && i < 4) {
            // i -= 1
            console.log("moving back!");
            console.log(i);
            backObjectShow();
        }
    });

});

function backObjectShow() {
        $(questions[i]).prev().show().siblings().hide();
        $(images[i]).prev().show().siblings().hide();
        $(answers[i]).prev().show().siblings().hide();
        // $(images[i - 1]).show().siblings().hide();
        // $(answers[i - 1]).show().siblings().hide();
}
