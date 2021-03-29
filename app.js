var translateBtn = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output")

var baseURL = "https://api.funtranslations.com/translate/minion.json";

function errorHandler(error) {
    console.log("Error: " + error);
    alert("Something wrong with server, try again after some time!");
}

translateBtn.addEventListener("click", function translate() {
    var input = inputText.value;
    var url = baseURL + "?text=" + input;
    fetch(url)
        .then(resp => resp.json())
        .then(json => outputText.innerText = json.contents.translated)
        .catch(errorHandler);
})