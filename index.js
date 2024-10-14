const display = document.getElementById("display")

// Szamok / irasjelek hozzáadása a kijelőhöz
function appendToDisplay(input){
    display.value += input
}

// Kijelző törlése
function clearDisplay(){
    display.value = ""
}

// Szamolas
function calculate(){



    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error"
    }

}