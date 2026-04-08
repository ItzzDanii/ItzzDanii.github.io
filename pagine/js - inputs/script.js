document.addEventListener("DOMContentLoaded", function(){
    const listSports = document.querySelectorAll(".sport"); 
    const listSesso = document.getElementsByName("sesso");

    for(let i = 0;i<listSports.length;i++)
        listSports[i].addEventListener("change",stampa);
    
    for(let i = 0;i<listSesso.length;i++)
        listSesso[i].addEventListener("change",stampa);

});

function stampa() {
    let selezionati = [];
    const listSports = document.querySelectorAll(".sport");
    const listSesso = document.getElementsByName("sesso");

    for(let i = 0;i<listSports.length;i++)
        if(listSports[i].checked)
            selezionati.push(listSports[i].value);

    let sessoSelezionato = "";

    for(let i = 0;i<listSesso.length;i++)
        if(listSesso[i].checked)
            sessoSelezionato = listSesso[i].value;

    console.log("Sports: ",selezionati);
    console.log("Sesso: ",sessoSelezionato);
}

let menu = document.getElementById("menu");

function stampaSelezionato(){
    let selezionato = menu.value;
    console.log("Value selected: ",selezionato);

    let testo = menu.options[menu.selectedIndex].text;
    console.log("Content selected: ",testo);
}

let annoCorrente = new Date().getFullYear();

function riempiConAnni(){
    let html = "";

    for(let i = 1900;i<=annoCorrente;i++)
        html += "<option value =" + i + ">" + i + "</option>";

    menu.innerHTML = html;
}

let txt1 = document.getElementById("txtBox1");

function stampaTextBox(){
    if(txt1.value == "")
        console.log("Vuoto!");
    else console.log(txt1.value);
}