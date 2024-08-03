var Translate=document.getElementById('translate');

var textInput =document.getElementById('d1');

var resultDiv= document.getElementById('output')

//function handleclick(){
  //  console.log("clicked");
   // var userInput =textInput.value;
   // resultDiv.innerHTML =userInput;
//}

translate.addEventListener("click",ClickHandler);

 function ClickHandler(){
    var inputText = textInput.value;
    fetch("https://api.funtranslations.com/translate/navi.json" + "?" + "text=" + inputText)
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated; 
        resultDiv.innerText = translatedText;
    })
    // .catch(errorHandeler)
 }