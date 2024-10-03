let lista_amigo = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo").value;
    let lista = document.getElementById("lista-amigos");

    if (amigo == "") {
        return;
    }

    if (lista_amigo.includes(amigo)) {
        alert("Esta nome já foi inserido");
        return;
    }

    if (lista.textContent == "") {
        lista.textContent = amigo;
    } else {
        lista.textContent += `, ${amigo}`;
    }

    lista_amigo.push(amigo);
    document.getElementById("nome-amigo").value = "";

}


function sortear() {

    if (lista_amigo.length >= 3) {
        embaralha(lista_amigo);
        lista_sorteio = document.getElementById("lista-sorteio");

        lista_sorteio.innerHTML = "";

        for (let i = 0; i < lista_amigo.length; i++) {
            if (i == lista_amigo.length - 1) {
                lista_sorteio.innerHTML += lista_amigo[i] + ' --> ' + lista_amigo[0] + "<br>";
            } else {
                lista_sorteio.innerHTML += lista_amigo[i] + ' --> ' + lista_amigo[i + 1] + "<br>";
            }
        }
    } else {
        alert("Não temos participantes o suficiente! É necessário no mínimo 3 participantes");
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    document.getElementById('nome-amigo').value = ''
    document.getElementById("lista-amigos").textContent = '';
    document.getElementById("lista-sorteio").textContent = "";
    lista_amigo = [];
}