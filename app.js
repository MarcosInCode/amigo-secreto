// Array global para armazenar os nomes adicionados
let amigos = [];

/**
 * Adiciona um amigo à lista e atualiza a exibição.
 */
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();
  
  if (nome === "") {
    alert("Digite um nome válido.");
    return;
  }
  
  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    input.value = "";
    return;
  }
  
  amigos.push(nome);
  atualizarListaAmigos();
  input.value = "";
}

/**
 * Atualiza a lista de nomes exibida na tela.
 */
function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  
  amigos.forEach(nome => {
    const li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);
  });
}

/**
 * Realiza o sorteio dos amigos secretamente.
 * É necessário ter pelo menos dois nomes para sortear.
 */
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois nomes para sortear.");
    return;
  }
  
  // Cria uma cópia do array e embaralha usando Fisher-Yates
  let amigosEmbaralhados = [...amigos];
  shuffle(amigosEmbaralhados);
  
  // Gera os pares: cada amigo recebe o próximo, e o último recebe o primeiro
  let pares = [];
  for (let i = 0; i < amigosEmbaralhados.length; i++) {
    let amigo = amigosEmbaralhados[i];
    let amigoSecreto = (i === amigosEmbaralhados.length - 1) ? amigosEmbaralhados[0] : amigosEmbaralhados[i + 1];
    pares.push({ amigo, amigoSecreto });
  }
  
  exibirPares(pares);
}

/**
 * Embaralha o array utilizando o algoritmo de Fisher-Yates.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

/**
 * Exibe os pares sorteados na tela.
 */
function exibirPares(pares) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  
  pares.forEach(par => {
    const li = document.createElement("li");
    li.textContent = `${par.amigo} → ${par.amigoSecreto}`;
    resultado.appendChild(li);
  });
}
