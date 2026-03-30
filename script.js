function inizializzaFAQ(){
    let faq = document.querySelectorAll(".domanda-faq");

    for(let i = 0;i < faq.length;i++){
        faq[i].addEventListener("click",gestisciClickFAQ);
    }
}

function gestisciClickFAQ(){
    let risposta = this.nextElementSibling;

    if(risposta.classList.contains("visible")){
        risposta.classList.remove("visible");
    }else{
        let tutte_risposte = document.querySelectorAll(".risposta-faq");

        for(let i = 0;i < tutte_risposte.length;i++){
            tutte_risposte[i].classList.remove("visible");
        }

        risposta.classList.add("visible")
    }

}

document.addEventListener("DOMContentLoaded",inizializzaFAQ);