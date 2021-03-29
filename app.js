var translateBtn = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output")

translateBtn.addEventListener("click", function translate() {
    var input = inputText.value;
    outputText.innerText = input;
})