$(document).ready(function() {
    console.log("working");

    $(".navigateForward").click(function() {
        console.log("march forward!");
        $("question_item").text("qcycle()");
        $(".question_item").text("This actress starred opposite Terrence Howard in which 2006 Oscar-winning Best Picture?");

    });

})


// Need to create a loop that goes through the array items, filling the fields. 

// Need to create a class of events that plug into existing containers on the page

var question = {
    two: $(".question2").text(),
    three: $(".question3").text(),
    four: $(".question4").text(),
    five: $(".question5").text(),
    qcycle: function() {
        for (var prop in question) {
            return question(prop);
        }
    }
};

var contents3 = {

    image: $(".hayek"),
    answers: $("#answers2").text(),
    complete: function() {
        return this.image + this.question + this.answers;
    }
};

var contents4 = {

    image: $(".oyelowo"),
    answers: $("#answers2").text(),
    complete: function() {
        return this.image + this.question + this.answers;
    }

};

var contents5 = {

    image: $(".henson"),
    answers: $("#answers2").text(),
    complete: function() {
        return this.image + this.question + this.answers;
    }
};

// var content_container = [contents2, contents3, contents4, contents5];

function filler() {

}
