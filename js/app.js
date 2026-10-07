const amigos = [];

// Quantidade mínima de participantes para sortear
const MINIMO_PARTICIPANTES = 2;
 
// Referências aos elementos da página
const campoNome = document.getElementById("nome-amigo");
const listaAmigos = document.getElementById("lista-amigos");
const listaSorteio = document.getElementById("lista-sorteio");
 
// Atualiza a lista visível a partir do array (a tela reflete o estado)
function atualizarLista() {
  listaAmigos.textContent = amigos.join(", ");
}

function adicionar() {
    // TODO ler validar guardar e atualizar
}

function sortear() {
  // TODO validar escolher e exibir
}

function reiniciar(evento) {
  // TODO impedir a navegação e restaurar o estado
}
