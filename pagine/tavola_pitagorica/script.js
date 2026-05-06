function generaTavola() {
    let table = document.getElementById("tabella");
    let s = "";

    for (let riga = 1; riga <= 10; riga++) {
        s += '<tr>';
        
        for (let colonna = 1; colonna <= 10; colonna++) {
            let prodotto = riga * colonna;
            if(prodotto%2==1)
                s += '<td style="background-color: red;">' + prodotto + '</td>';
            else  s += '<td>' + prodotto + '</td>';
        }
        
        s += '</tr>';
    }

    table.innerHTML = s;
}