let score = 0;

//un cookie ha una duration
function setCookie(nome,valore,durataGiorni){
    let data = new Date();
    data.setTime(data.getTime()+(durataGiorni * 24 * 60 * 60 * 1000)); // converto da gg in ms
    document.cookie = nome + "=" 
                        + encodeURIComponent(valore) // toglie spazi
                        + ";expires=" + data.toUTCString(); // scadenza (con fuso orario, + preciso)
                        + ";path=/"
}

function getCookie(nome){
    let cookies = document.cookie.split(";"); // splitto i cookie in un array

    for (let i=0; i < cookies.length; i++){
        let c = cookies[i].trim();
        if (c.startsWith(nome + "=")) {
            return decodeURIComponent(c.substring(nome.length + 1));
        }
    }

    window.location.href = "page2.html" ;
}

function salvaDati(numero_risposta){
    switch(numero_risposta){
        case 1:
            let r1 = document.getElementById("risp1").value;
            if(r1 === "")
                r1 = "Nessuna risposta";

            setCookie("risp1",r1,1);
            break;

        case 2:
            let r2 = document.getElementById("risp2").value;
            if(r2 === "")
                r2 = "Nessuna risposta";

            setCookie("risp2",r2,1);
            break;

        case 3:
            let r3;
            if(document.getElementById("risp3.1").checked)
                r3 = "Statiche";
            else if(document.getElementById("risp3.2").checked)
                r3 = "Dinamiche";
            else r3 = "Nessuna risposta";

            setCookie("risp3",r3,1);
            break;

        case 4:
            let r4 = [];
            if(document.getElementById("risp4.1").checked == true)
                r4.push("void");
            if(document.getElementById("risp4.2").checked == true)
                r4.push("integer");
             if(document.getElementById("risp4.3").checked == true)
                r4.push("char");
            else  if(document.getElementById("risp4.1").checked && document.getElementById("risp4.2").checked && document.getElementById("risp4.3").checked)
                r4.push("Nessuna risposta");

            let r4_str = "";

            if(r4.length > 0){
                r4_str = r4.join("");
            }
            else r4_str = "Nessuna risposta";

            setCookie("risp4",r4_str,1);
            break;

        case 5:
            let r5 = document.getElementById("risp5").value;
            if(r5 === "")
                r5 = "Nessuna risposta";

            setCookie("risp5",r5,1);
            break;
    }
}

function caricaRiepilogo(){
    let r1 = getCookie("risp1") || "Nessuna risposta";
    let r2 = getCookie("risp2") || "Nessuna risposta";
    let r3 = getCookie("risp3") || "Nessuna risposta";
    let r4 = getCookie("risp4") || "Nessuna risposta";
    let r5 = getCookie("risp5") || "Nessuna risposta";
    
    if(r1.toUpperCase() === "SQL")
        score++;

    if(r2 === "2")
        score++;

    if(r3.toUpperCase() === "DINAMICHE")
        score++;

    if(r4 === "voidintegerchar")
        score++;

    if(r5.toUpperCase() === "BYTE")
        score++;

    let s = "";

    s += "<h3>Risposte Quiz</h3>";
    s += "<strong>Risposta 1: </strong>" + r1 + "<br>";
    s += "<strong>Risposta 2: </strong>" + r2 + "<br>";
    s += "<strong>Risposta 3: </strong>" + r3 + "<br>";
    s += "<strong>Risposta 4: </strong>" + r4 + "<br>";
    s += "<strong>Risposta 5: </strong>" + r5 + "<br>";
    s += "<strong>Score: </strong>" + score + "/5";
    if(score === 5)
        s+="<br><br><em>(Quiz completato!)</em></b>";
    // Inseriamo tutto nel div con id "riepilogo"
    let container = document.getElementById("riepilogo");
    if(container) {
        container.innerHTML = s;
    }
}
