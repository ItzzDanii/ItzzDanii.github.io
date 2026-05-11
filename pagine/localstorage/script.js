let students = [];
let datiSalvati = localStorage.getItem("studenti");

if (datiSalvati !== null) {
    students = JSON.parse(datiSalvati);
}

function aggiungiStudente() {
    let nomeInput = document.getElementById("nome");
    let nome = nomeInput.value.trim();

    let regexNome = /^[a-zA-Z\s]+$/;

    if (!regexNome.test(nome) || nome === "") {
        alert("Nome non valido!");
        return;
    }

    students.push(nome);
    localStorage.setItem("studenti", JSON.stringify(students));
    nomeInput.value = "";
    mostraStudenti();
}

function mostraStudenti() {
    let lista = document.getElementById("listaStudenti");
    lista.innerHTML = "";

    for (let i = 0; i < students.length; i++) {
        let p = document.createElement("p");
        p.textContent = students[i] + " ";

        let button = document.createElement("button");
        button.textContent = "Elimina";
        button.onclick = function () { eliminaStudente(i); };

        p.appendChild(button);
        lista.appendChild(p);
    }
}

function eliminaStudente(indice) {
    students.splice(indice, 1);
    localStorage.setItem("studenti", JSON.stringify(students));
    mostraStudenti();
}

mostraStudenti();