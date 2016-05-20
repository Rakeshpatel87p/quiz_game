// holds all questions
var questions = $(".question_item > p").toArray();
// holds all question-images
var images = $(".container_CharacterPhoto > div").toArray();
// holds all quesiton-answer choices
var answers = $(".options > ul").toArray();
// keeps track of which array value to pull based on clicks to forward arrow
var i = 0;
// keeps track of how many correct answers user gets - at end, outputed to view.
var correctAnswers = 0;

// elements that will be outputted to the user based on var i
var content = {
    question: $(questions[i]).show(),
    image: $(images[i]).show(),
    answer: $(answers[i]).show(),
    fill: function() {
        return $(questions[i]).show().siblings().hide(),
            $(images[i]).show().siblings().hide(),
            $(answers[i]).show().siblings().hide()
    }
};

$(document).ready(function() {
    $(".navigateForward").click(function() {
        if (i < 4) {
            i++;
            content.fill();
        } else if (i == 4) {
            $(".end").show().text("You're Done! You got " + correctAnswers + " out of 5 questions right.").siblings().hide();
            $(".playAgain").show();
            $(images[i]).hide();
            $(answers[i]).hide();
        };
        // Hide navigate button until user selects an answer per rules of assignment.
        $(".navigateForward").hide();

    });

    $(".options li").click(function() {
        // Highlights selected answer of user. 
        $(this).closest("li").addClass("highlight").siblings().hide();
        // Adds up the number of correct answers of the user.
        if ($(this).is(".correct")) {
            correctAnswers++
        };
        $(".navigateForward").show();
        return false;
        
    });

    $(".playAgain").click(function() {
        i = 0;
        correctAnswers=0;
        content.fill();
        $(".options li").closest("li").removeClass("highlight").siblings().show()

    });

});
