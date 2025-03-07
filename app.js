let amigos = []; // Array para armazenar os nomes dos amigos

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nome = inputAmigo.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array
    inputAmigo.value = ""; // Limpa o campo de entrada

    atualizarListaAmigos(); // Atualiza a lista na tela
}
function sortearAmigo() {
    let resultado = document.getElementById("resultado"); // Obtém o elemento de resultado

    // Verifica se há amigos no array
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceAleatorio]; // Obtém o nome sorteado

    // Exibe o resultado na página
    resultado.innerHTML = `<li>${amigoSorteado} foi sorteado!</li>`;
}
