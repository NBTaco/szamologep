const display = document.getElementById("display")
const keysDiv = document.getElementById("keys")


const buttons = [
    {label: '+', class: 'operator-btn'},
    {label: '1'},
    {label: '2'},
    {label: '3'},
    {label: '-', class: 'operator-btn'},
    {label: '4'},
    {label: '5'},
    {label: '6'},
    {label: '*', class: 'operator-btn'},
    {label: '7'},
    {label: '8'},
    {label: '9'},
    {label: '/', class: 'operator-btn'},
    {label: '0'},
    {label: '.'},
    {label: '^2', class: 'operator-btn'},
    {label: 'C', class: 'a', action: 'clear'},
    {label: '=', class: 'a', action: 'calculate'}
]


buttons.forEach(button => {
    const btn = document.createElement("button")
    btn.textContent = button.label;
    keys.appendChild(btn);
});



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