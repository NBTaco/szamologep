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
    {label: '=', class: 'a', action: 'calculate'},
    {label: '^2', action:'negyzetreemeles' ,class: 'operator-btn'},
    {label: '', class:'b'},
    {label: '',  class:'b'},
    {label: 'C', class: 'a', action: 'clear'},
    
]


buttons.forEach(button => {
    const btn = document.createElement("button")
    btn.innerHTML = button.label;

    if(button.class){
        btn.classList.add(button.class)
    }

    if (button.action === 'clear')
        btn.addEventListener("click", clearDisplay)

    else if(button.action === 'calculate')
        btn.addEventListener("click", calculate)

    else if(button.action === 'negyzetreemeles')
        btn.addEventListener("click", negyzet)

    else {
        btn.addEventListener("click", () => appendToDisplay(button.label))
    }

    keys.appendChild(btn);
});

function negyzet(){
    let szam = display.value.replace("^2", "")
    let eredmeny = Math.pow(szam, 2)
    display.value = eredmeny
}

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
        if(display.value.includes("^2"))
            negyzet();

        else display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }

}