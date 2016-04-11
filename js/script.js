var questions = $(".question_item > p").toArray();
var images = $(".container_CharacterPhoto > div").toArray();
var answers = $(".options > ul").toArray();
var i = 0;

var content = {
    question: $(questions[i]).show(),
    image: $(images[i]).show(),
    answer: $(answers[i]).show(),
    fill: function() {
        return $(questions[i]).show().siblings().hide(),
            $(images[i]).show().siblings().hide(),
            $(answers[i]).show().siblings().hide(),
            console.log(i);
    }
};

//output score with correct/incorrent answers

$(document).ready(function() {
    console.log("working");
    $(".navigateForward").click(function() {
        if (i >= 0 && i < 4) {
            i += 1;
            content.fill();
            console.log(content.fill());
        };
        console.log(i);
        console.log("march forward!");
    });

    $(".navigateBack").click(function() {
        backObjectShow();
    });

    $(".options li").click(function() {
        console.log("working");
        $(this).closest("li").addClass('highlight').siblings().removeClass('highlight');
        return(false);
    });

});

function backObjectShow() {
    $(questions[i]).prev().show().siblings().hide();
    $(images[i]).prev().show().siblings().hide();
    $(answers[i]).prev().show().siblings().hide();
    if (i >= 0) {
        return i -= 1;
        console.log(i);
    }
}
