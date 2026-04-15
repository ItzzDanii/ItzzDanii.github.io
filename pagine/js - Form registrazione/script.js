function riempiAnni(){
    let anno_inizio = 1900;
    let anno_fine = 2026;
    let s = "";

    for(let i = anno_inizio;i<anno_fine+1;i++){
        s+="<option>"+i+"</option>";
    }

    document.getElementById("anno_nascita").innerHTML = s;
}

function validaDati(){
    let cognome = document.getElementById("cognome").value;
    let nome = document.getElementById("nome").value;
    let code = document.getElementById("codice_fiscale").value.toUpperCase();
    let sesso = "";
    let anno_nascita = document.getElementById("anno_nascita").value;
    let termini = false;

    if(cognome === ""){
        alert("Inserisci cognome!");
        return;
    }

    if(nome === ""){
        alert("Inserisci nome!");
        return;
    }

    if(code == ""){
        alert("Inserisci codice fiscale!");
        return;
    }

    if(document.getElementById("maschio").checked){
        sesso = "M";
    }
    else if(document.getElementById("femmina").checked){
        sesso = "F";
    }
    
    if(document.getElementById("termini").checked){
        termini = true;
    }
    else {
        alert("Accettare i termini del servizio!")
    }

    if(!controllaCF(code)){
        alert("Codice fiscale non valido!");
        return;
    }

    alert("Registrazione effettuata con successo!");
}

function controllaCF(cf) {
    // 1. Controllo lunghezza e formato base
    const regex = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/i;
    if (!regex.test(cf)) return false;

    // 2. Calcolo del carattere di controllo (Algoritmo ufficiale)
    const setDispari = {
        '0':1, '1':0, '2':5, '3':7, '4':9, '5':13, '6':15, '7':17, '8':19, '9':21,
        'A':1, 'B':0, 'C':5, 'D':7, 'E':9, 'F':13, 'G':15, 'H':17, 'I':19, 'J':21,
        'K':2, 'L':4, 'M':18, 'N':20, 'O':11, 'P':3, 'Q':6, 'R':8, 'S':12, 'T':14,
        'U':16, 'V':10, 'W':22, 'X':25, 'Y':24, 'Z':23
    };
    const setPari = {
        '0':0, '1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9,
        'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5, 'G':6, 'H':7, 'I':8, 'J':9,
        'K':10, 'L':11, 'M':12, 'N':13, 'O':14, 'P':15, 'Q':16, 'R':17, 'S':18, 'T':19,
        'U':20, 'V':21, 'W':22, 'X':23, 'Y':24, 'Z':25
    };

    let somma = 0;
    for (let i = 0; i < 15; i++) {
        let char = cf[i];
        // Posizioni dispari (1, 3, 5...) diventano indice 0, 2, 4... in JS
        if ((i + 1) % 2 !== 0) {
            somma += setDispari[char];
        } else {
            somma += setPari[char];
        }
    }

    let checkDigit = String.fromCharCode((somma % 26) + 65);
    return checkDigit === cf[15];
}

riempiAnni();