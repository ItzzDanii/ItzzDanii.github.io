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

function salvaDati(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;

    setCookie("nome",nome,1);
    setCookie("cognome",cognome,1);

    window.location.href = "page2.html"; // naviga nella page2
}

function caricaRiepilogo(){
    let nome = getCookie("nome");
    let cognome = getCookie("cognome");

    let s = "";
    s+="<strong>Nome: </strong>"+nome;
    s+="<br>";
    s+="<strong>Cognome: </strong>"+cognome;
    document.getElementById("riepilogo").innerHTML = s; //dentro il div
}