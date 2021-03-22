/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1.Which of the following is not an indirect test?", ///// Write the question inside double quotes
            answers: {
                a: "Rebound hammer test", ///// Write the option 1 inside double quotes
                b: " Windsor Probe", ///// Write the option 2 inside double quotes
                c: "Core test", ///// Write the option 1 inside double quotes
                d: "Ultrasound test", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "2. An ultrasonic pulse velocity test is_____.", ///// Write the question inside double quotes
            answers: {
                a: "Nondestructive, ex-situ test", ///// Write the option 1 inside double quotes
                b: "Nondestructive, in-situ test", ///// Write the option 2 inside double quotes
                c: "Destructive, ex-situ test", ///// Write the option 1 inside double quotes
                d: "Destructive, in-situ test", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        {
            question: "3.Question- Higher velocities in ultrasonic pulse velocity test indicate_____.", ///// Write the question inside double quotes
            answers: {
                a: "Good quality and uniformity of concrete", ///// Write the option 1 inside double quotes
                b: "Good quality and discontinuity in the concrete", ///// Write the option 2 inside double quotes
                c: "Concrete has many internal cracks", ///// Write the option 1 inside double quotes
                d: "Concrete has many internal voids", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "4. Pulse velocity measurement does not depend on_____.", ///// Write the question inside double quotes
            answers: {
                a: "Moisture content of concrete", ///// Write the option 1 inside double quotes
                b: "Temperature of concrete", ///// Write the option 2 inside double quotes
                c: "Density of the concrete", ///// Write the option 1 inside double quotes
                d: "Geometry of the concrete member", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        
        


    // {
    //   question: "<img src='images/8.PNG'><br>Identify the location of Secondary electron detector",  ///// Write the question inside double quotes
    //   answers: {
    //     a: "<img src='images/1b.png'>",                  ///// Write the option 1 inside double quotes
    //     b: "<img src='images/1a.png'>",                  ///// Write the option 2 inside double quotes
    //     c: "<img src='images/1c.PNG'>",      },
    //   correctAnswer: "c"                ///// Write the correct option inside double quotes
    // },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
