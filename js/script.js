var questions = $(".question_item > p").toArray();
var images = $(".container_CharacterPhoto > div").toArray();
var answers = $(".options > ul").toArray();
console.log(questions.length);

function fill (){
    for(i=0; i<=questions.length; i=i+1){
    	return (questions[i]);
    	console.log((questions[i]));
    }


    // question: $(".question_item"),
    // image: $(".container_CharacterPhoto"),
    // answer: $(".options"),
};

// var freeman = Object.create(content);
// freeman.question = $(".question_item").text($(questions[0]).text());

// freeman = {
//     question $(".question_item").children(".question1").text(),
//     image = $(".container_CharacterPhoto").children(".freeman"),
//     answers = $(".options").children(".choices1").text(),
// }

// freeman ={
// 	// question: $(".question_item").children(".question1").text(),
// 	image:$(".container_CharacterPhoto").children(".freeman"),
// 	answers:$(".options").children(".choices1").text(),
// 	// test:"Hey",
// 	        fill:function(){
// 				return ("x");
// 		}	
// }

// var newton = Object.create(freeman);

// newton

// newton = {
//     question: $(".question_item").children(".question2").text(),
//     image: $(".container_CharacterPhoto").children(".newton"),
//     answers: $(".options").children(".choices2").text(),
// }

// console.log(freeman.question);

// console.log(content.question);

$(document).ready(function() {
    console.log("working");

    $(".navigateForward").click(function() {
        $(".question_item").children(fill()).show();
        console.log(fill());
        console.log("march forward!");
    })

});

// Create an object with the 3 attributes. With each click, create a new object w/ different values.
// var contents2 = {
//     question: $(".question_item").text($(".question1").text()),
//     image: $(".hayek"),
//     answers: $("#answers2").text(),
//     complete: function() {
//         return this.question;
//         console.log("this.question");
//     }
// };

// var contents3 = Object.create(contents2);

// contents3 = {
//     question: $(".question_item").text($(".question2").text()),
//     image: $(".hayek"),
//     answers: $("#answers2").text(),

// }


// })


// Need to create a loop that goes through the array items, filling the fields. 

// Need to create a class of events that plug into existing containers on the page


// function getQuestions(){
// 	questions;
// 	for (i=0; i<=questions.valueOf();i++){
// 		return questions[i];
// 		console.log("questions.valueOf()");
// 	}
// }






// var question = new Array(); 
//     two: $(".question2").text(),
//     three: $(".question3").text(),
//     four: $(".question4").text(),
//     five: $(".question5").text(),
//     qcycle: function() {
//         for (var prop in question) {
//             console.log(question[prop]);
//             // console.log(question.size());
//         }
//     }
// };



// var contents4 = {

//     image: $(".oyelowo"),
//     answers: $("#answers2").text(),
//     complete: function() {
//         return this.image + this.question + this.answers;
//     }

// };

// var contents5 = {

//     image: $(".henson"),
//     answers: $("#answers2").text(),
//     complete: function() {
//         return this.image + this.question + this.answers;
//     }
// };
