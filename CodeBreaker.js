var globalCodeSum;
var globalCodeProduct;
var globalCodeA;
var globalCodeB;
var globalCodec;

function createEquation() {
    var CodeA = Math.floor(Math.random() *20);
    var CodeB = Math.floor(Math.random() *20);
    var CodeC = Math.floor(Math.random() *20);
    globalCodeA = CodeA;
    globalCodeB = CodeB;
    globalCodeC = CodeC;
    var CodeSum = CodeA + CodeB + CodeC;
    var CodeProduct = CodeA * CodeB * CodeC;
    globalCodeSum = CodeSum;
    globalCodeProduct = CodeProduct;
    document.getElementById('equationArea').innerHTML=globalCodeSum+ " and multiply to "+globalCodeProduct;
}

function checkAnswer() {
    var answerA = Number(document.getElementById("guessA").value);
    var answerB = Number(document.getElementById("guessB").value);
    var answerC = Number(document.getElementById("guessC").value);

    var guessSum = answerA + answerB + answerC;
    var guessProduct = answerA * answerB * answerC;
    if (guessSum == globalCodeSum && guessProduct == globalCodeProduct)
    {
        alert("Correct!!!");
        location.reload();
    }
    else
    {
        document.getElementById("error_message").innerHTML = "Incorrect Answer:" + globalCodeA + "," + globalCodeB +"," +globalCodeC;
        window.setTimeout(pageReload, 2000);    
    }
}

function pageReload() {
    location.reload();
}