let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let time = null;
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

let url = "https://apis.ccbp.in/random-quote";
let options = {
    method: "GET"
}

function displayQuote() {
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            quoteDisplay.classList.remove("d-none");
            quoteDisplay.textContent = jsonData.content;
        });
}

function setTimer() {
    let counter = 0;
    time = setInterval(function() {
        timer.textContent = counter;
        counter = counter + 1;
    }, 1000);
}

function clearTime() {
    clearInterval(time);
}

function validateInput() {
    console.log(quoteInput.value === quoteDisplay.textContent);
    if (quoteDisplay.textContent === quoteInput.value) {
        return true;
    } else {
        return false;
    }
}

spinner.classList.remove("d-none");
quoteDisplay.classList.add("d-none");
displayQuote();
setTimer();

submitBtn.addEventListener("click", function() {
    let validInput = validateInput();
    console.log(quoteDisplay.textContent);
    console.log(quoteInput.value);
    if (validInput) {
        result.textContent = "You typed in " + timer.textContent + " seconds";
        clearTime();
    } else {
        result.textContent = "You typed incorrect sentence";
    }
});

resetBtn.addEventListener("click", function() {
    spinner.classList.remove("d-none");
    quoteDisplay.classList.add("d-none");
    quoteInput.value = "";
    result.textContent = "";
    displayQuote();
    clearTime();
    setTimer();
})