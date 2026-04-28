let tot = 0;

function calcolaTotale(){
    const PREZZO_MOUSE = 16;
    const PREZZO_TAST = 25;
    const PREZZO_STAMP = 350;
    const PREZZO_SCAN = 200;

    let Qmouse = document.getElementById("txtQMouse").value;
    let Qtast  = document.getElementById("txtQTast").value;
    let Qstamp = document.getElementById("txtQStamp").value;
    let Qscan  = document.getElementById("txtQScan").value;

    document.getElementById("txtTotMouse").value = Qmouse;
    document.getElementById("txtTotTast").value = Qtast;
    document.getElementById("txtTotStamp").value = Qstamp;
    document.getElementById("txtTotScan").value = Qscan;

    if(Qmouse > 0)
        tot += Qmouse * PREZZO_MOUSE;
    if(Qtast > 0)
        tot += Qtast * PREZZO_TAST;
    if(Qstamp > 0)
        tot += Qstamp * PREZZO_STAMP;
    if(Qscan > 0)
        tot += Qscan * PREZZO_SCAN;

    document.getElementById("txtTot").value = tot;
    console.log("Totale aggiornato:", tot);
}

function inviaOrdine(){
    if(!document.getElementById("radioSi").checked && 
       !document.getElementById("radioNo").checked){
       window.alert("Seleziona una risposta per le notifiche!");
       return;
    }

    if(document.getElementById("txtEmail").value === ""){
        window.alert("Inserisci email!");
        return;
    }
    
    else{
        let msg = "";
        msg += "ORDINE INVIATO CON SUCCESSO!";
        msg+="\nTotale: "+tot+"$";
        msg+="\nEmail: "+document.getElementById("txtEmail").value;
        msg+="\nPagamento: "+document.getElementById("comboPaga").value;
        console.log(msg);
    }
}