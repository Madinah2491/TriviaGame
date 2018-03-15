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
    correctAnswer: 1
}, {
    question: "Attraction is very primative, disliking someone without just cause could be your subconscious disliking their scent ",
    choices: ["True", "False"],
    correctAnswer: 0
}, {
    question: "Essential Oils vibrate on the highest of frequencies",
    choices: ["True", "False"],
    correctAnswer: 1
}, {
    question: "___________ has the highest frequency of all of fragrances",
    choices: ["Lavender", "Musk", "Rose", "Patchoili"],
    correctAnswer: 2
}, {
    question: "People are more likely to help you if they are attracted to you in one or more ways",
    choices: ["True", "False"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

//allows everything on the page to load//
$(document).ready(function () {

    // Makes the first question pop up//
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();

    // when user presses next question button prompts the next question
    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".quizMessage").text("Select an answer to move to the next question");
                $(document).find(".quizMessage").show();
            } else {
                // TODO: Remove any message -> not sure if this is efficient to call this each time....
                $(document).find(".quizMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++; // Since we have already displayed the first question on DOM ready
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    // Change the text in the next button to ask if user wants to play again
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

// This displays the current question AND the choices
function displayCurrentQuestion() {

    console.log("In display current Question");

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