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



function sortear() {
  // TODO validar escolher e exibir

  if (amigos.length < MINIMO_PARTICIPANTES) {
    alert("Adicione pelo menos " + MINIMO_PARTICIPANTES + " participantes para sortear.");
    return;
  }
 
  const indice = Math.floor(Math.random() * amigos.length);
  const escolhido = amigos[indice];
 
  listaSorteio.textContent = escolhido;
}

function reiniciar(evento) {
  // TODO impedir a navegação e restaurar o estado
}
