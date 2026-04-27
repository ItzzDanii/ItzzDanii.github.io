function calcolaTotale(){
    let tot = 0;

    const PREZZO_MOUSE = 16;
    const PREZZO_TAST = 25;
    const PREZZO_STAMP = 350;
    const PREZZO_SCAN = 200;

    let Qmouse = document.getElementById("txtQMouse").value;
    let Qtast  = document.getElementById("txtQTast").value;
    let Qstamp = document.getElementById("txtQStamp").value;
    let Qscan  = document.getElementById("txtQScan").value;

    tot = Math.abs(Qmouse * PREZZO_MOUSE) + Math.abs(Qtast * PREZZO_TAST) + Math.abs(Qstamp * PREZZO_STAMP) + Math.abs(Qscan * PREZZO_SCAN);

    document.
    document.getElementById("txtTot").value = tot;
    console.log("Totale aggiornato:", tot);
}