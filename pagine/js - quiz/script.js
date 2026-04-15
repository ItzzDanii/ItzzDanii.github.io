let mesi = ["GEN","FEB","MAR","APR","MAG","GIU","LUG","AGO","SET","OTT","NOV","DIC"];

let risposte_giuste = ["SQL","2","Stat","voidintchar","BYTE"];

let score = 0;

function riempiMesi(){
    let s = "";

    for(let i = 0;i<mesi.length;i++)
        s+="<option>"+mesi[i]+"</option>";

    document.getElementById("mese").innerHTML = s;
}

function validaDatiAnagrafici(){
    if(document.getElementById("cognome").value === ""){
        alert("Inserisci cognome!");
        return false;
    }
    
    if(document.getElementById("nome").value === ""){
        alert("Inserisci nome!");
        return false;
    }

    if(document.getElementById("giorno").value === ""){
        alert("Inserisci giorno!");
        return false;
    }

    if(document.getElementById("anno").value === ""){
        alert("Inserisci anno!");
        return false;
    }

    return true;
}

function elaboraDati(){
    if(validaDatiAnagrafici()){
        score = 0;
        let r1 = document.getElementById("risp1").value;
        let r2 = document.getElementById("combo-risp2").value;
        let r3 = "";
        let r4 = "";
        let r5 = document.getElementById("risp5").value;

        if(document.getElementById("risp3_1").checked)
            r3 = document.getElementById("risp3_1").value;
        else if(document.getElementById("risp3_2").checked)
            r3 = document.getElementById("risp3_2").value;

        if(document.getElementById("risp4_1").checked)
            r4+=document.getElementById("risp4_1").value;
        if(document.getElementById("risp4_2").checked)
            r4+=document.getElementById("risp4_2").value;
        if(document.getElementById("risp4_3").checked)
            r4+=document.getElementById("risp4_3").value;

        let risposte = [r1,r2,r3,r4,r5];

        for(let i = 0;i<risposte.length;i++){
            if(risposte[i] === risposte_giuste[i])
                score+=1;
        }

        document.getElementById("txtScore").value = score;
    }
}

function cancellaDati(){
   let txtBxs = document.querySelectorAll('input[type="text"]');
   let radios = document.querySelectorAll('input[type="radio"]');
   let ckBxs = document.querySelectorAll('input[type="checkbox"]');
   let select = document.querySelectorAll('select');

   for(let i = 0;i<txtBxs.length;i++)
        txtBxs[i].value = "";

   for(let i = 0;i<radios.length;i++)
        radios[i].checked = false;

   for(let i = 0;i<ckBxs.length;i++)
        ckBxs[i].checked = false;

   for(let i = 0;i<select.length;i++)
        select[i].selectedIndex = 0;
}

function utenteConScore(){
    if(validaDatiAnagrafici()){
        let s = "";

        let nome = document.getElementById("nome").value.trim().toUpperCase();
        let cognome = document.getElementById("cognome").value.trim().toUpperCase();
        let mese = document.getElementById("mese").value.trim();
        let anno = document.getElementById("anno").value.trim().toUpperCase();

       s += cognome.substring(0, 3);
        s += nome.substring(0, 3);
        s += mese;
        s += anno.substring(2, 4);
        s+=(score*10);

        document.getElementById("utente_score").value = s;
    }
}

riempiMesi();