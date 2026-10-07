const amigos = [];
 
// Histórico dos nomes já sorteados (não altera o array amigos)
const sorteados = [];
 
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
 
// PASSO 1: adiciona os nomes na lista.

function adicionar() {
  const nome = campoNome.value.trim();
 
  if (nome === "") {
    alert("Digite um nome antes de adicionar.");
    campoNome.focus();
    return;
  }
 
  amigos.push(nome);
  atualizarLista();
  campoNome.value = "";
  campoNome.focus();
}
 
// PASSO 2: sorteia um nome da lista.

function sortear() {
  if (amigos.length < MINIMO_PARTICIPANTES) {
    alert("Adicione pelo menos " + MINIMO_PARTICIPANTES + " participantes para sortear.");
    return;
  }
 
  const indice = Math.floor(Math.random() * amigos.length);
  const escolhido = amigos[indice];
 
  // O nome continua em "amigos"; só é registrado no histórico
  sorteados.push(escolhido);
  listaSorteio.textContent = sorteados.join(", ");
}
 
// PASSO 3: reinicia o sorteio.

function reiniciar(evento) {
  if (evento) {
    evento.preventDefault();
  }
 
  amigos.length = 0; // esvazia o mesmo array, sem criar um segundo estado
  sorteados.length = 0;
  campoNome.value = "";
  listaAmigos.textContent = "";
  listaSorteio.textContent = "";
  campoNome.focus();
}