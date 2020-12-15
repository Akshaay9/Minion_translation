const translate = document.getElementById("translate")
const translatedResult = document.getElementById("translated")
const btn = document.getElementById("btn")
var translatedValue = translate.value



// API
translatedResult.textContent = ""

const translateApi =() => {


    const url = `https://api.funtranslations.com/translate/minion.json?text=${translate.value}`;
    fetch(url)
        .then(response => response.json())
        .then(contents => {
            var translatedData = contents.contents.translated
            translatedResult.innerText = translatedData
            translate.value = ""

        })






}

btn.addEventListener("click", () => {
    const translatedData = translateApi()

})



