
let amigos = [];


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


function atualizarListaAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  
  amigos.forEach(nome => {
    const li = document.createElement("li");
    li.textContent = nome;
    listaAmigos.appendChild(li);
  });
}


function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois nomes para sortear.");
    return;
  }
  
  
  let amigosEmbaralhados = [...amigos];
  shuffle(amigosEmbaralhados);
  
  
  let pares = [];
  for (let i = 0; i < amigosEmbaralhados.length; i++) {
    let amigo = amigosEmbaralhados[i];
    let amigoSecreto = (i === amigosEmbaralhados.length - 1) ? amigosEmbaralhados[0] : amigosEmbaralhados[i + 1];
    pares.push({ amigo, amigoSecreto });
  }
  
  exibirPares(pares);
}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function exibirPares(pares) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";
  
  pares.forEach(par => {
    const li = document.createElement("li");
    li.textContent = `${par.amigo} → ${par.amigoSecreto}`;
    resultado.appendChild(li);
  });
}
