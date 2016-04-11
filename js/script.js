var questions = $(".question_item > p").toArray();
var images = $(".container_CharacterPhoto > div").toArray();
var answers = $(".options > ul").toArray();
var i = 0;
var x = 0;

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

$(document).ready(function() {
    console.log("working");
    $(".navigateForward").click(function() {
        if (i < 4) {
            i += 1;
            content.fill();
        } else if (i = 4) {
            $(".end").show().text("You're Done! You got " + x + " out of 5 questions right.").siblings().hide();
            $(".playAgain").show();
            $(images[i]).hide();
            $(answers[i]).hide();
        };
        
        $(".navigateForward").hide();
        console.log(i);
        console.log("march forward!");
    });

    $(".options li").click(function() {
        console.log("working");
        $(this).closest("li").addClass("highlight").siblings().hide();
        if ($(this).is(".correct")) {
            x += 1
        };
        $(".navigateForward").show();
        return (false);
        
    });

    $(".playAgain").click(function() {
        i = 0;
        x=0;
        console.log(i);
        content.fill();
        $(".options li").closest("li").removeClass("highlight").siblings().show()


    });

});
