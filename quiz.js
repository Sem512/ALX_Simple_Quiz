document.getElementById("submit-answer").addEventListener('click',checkAnswer);

function checkAnswer(){

    let correctAnswer="4"
    let userAnswer=document.querySelector('input[name="quiz"]:checked').value;
    let text=document.getElementById("feedback");    
    console.log(userAnswer);

    if (userAnswer === correctAnswer) {
        text.textContent = "Correct! Well done.";
    } else {
        text.textContent = "That's incorrect. Try again!";
    }
}