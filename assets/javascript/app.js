//$("startbutton").click();{

//    $("#jumbotron").html(blah blah)


//    $(".jumbotron").on("click","a",function(){
//        console.log ('I work')
//} 

// <div class="jumbotron">
//<h1 class="display-3">Trivia Game</h1>
//<p class="lead">Basic Trivia on ...</p>
//<hr class="my-4">
//<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
//<p class="lead">
//<a class="btn btn-primary btn-lg" href="#" role="button">Click ME!</a>
//</p>
//</div>
//<div class="tba">

//</div>

///questions to be asked//
var questions = [{
    question: "Attraction is based primarily on facial symetry",
    choices: ["True", "False"],
    correctAnswer: 0
}, {
    question: "Attraction is very primative, disliking someone without just cause could be your subconscious disliking their scent ",
    choices: ["True", "False"],
    correctAnswer: 0
}, {
    question: "Essential Oils vibrate on the highest of frequencies",
    choices: ["True", "False"],
    correctAnswer: 0
}, {
    question: "___________ has the highest frequency of all of fragrances",
    choices: ["Lavender", "Musk", "Rose", "Patchoili"],
    correctAnswer: 2
}, {
    question: "People are more Likely to help you if they are attracted to you in one or more ways",
    choices: ["True", "False"],
    correctAnswer: 0
}, {
    question: "____________ is the intent to continue the relationship even in the face of difficulties.",
    choices: ["Love", "Commitment", "Passion"],
    correctAnswer: 1
}, {
    question: "___________ the obsessive thinking about and craving for a particular person",
    choices: ["Attraction", "Lust", "Attachment"],
    correctAnswer: 0
}, {
    question: "Bonus: I love staying up every Friday night doing homework And not socializing",
    choices: ["True", "False"],
    correctAnswer: 1 //Although I hate it I am looking at the bigger picture and know having no life is only temporary torture
},


];
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

//begins game with any key stroke
document.onkeyup = function(event) {


//allows everything on the page to load//
$(document).ready(function () {

    // Makes the first question pop up//
    displayCurrentQuestion();
    $(this).find(".triviaMessage").hide();

    // when user presses next question button prompts the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".triviaMessage").text("Select an answer to move to the next question");
                $(document).find(".triviaMessage").show();
            } else {
                //Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".triviaMessage").hide();
                //scoring
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    //Ask if user wants to play again ie a restart option
                    $(document).find(".nextButton").text("Re-Play?");
                    quizOver = true;
                }
            }
        } else { // quiz ended and clicked the next button 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
var timeCounter = 0
var myTimer = setInterval(timeCounter, 8000);

/*
function timeCounter(){
    timeCounter++;
    console.log("counter", timeCounter);
    if (timeCounter=== 8000) {
        alert ("Time's UP! Move onto the next question", questions[currentQuestion]);
        timeCounter = 0
        }
    }
*/

//set timer 10 sec
setTimeout(timeUp, 1000 * 10);
function timeUp() {

    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");

    $(document).find(".triviaMessage").text("Time's Up!");
    console.log("time is up");
    };

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("Display the current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;

    // Set the questionClass text to the current question
    $(questionClass).text(question);

    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}
})
}
