let amigos = [];

function adicionarNome() {
  let infoNome = document.getElementById("amigo");
  let amigoNome = infoNome.value.trim();

  if (!amigoNome) {
    alert("Adicione um nome!");
  } else {
    amigos.push(amigoNome);
    infoNome.value = "";
    infoNome.focus();
    atualizacaoLista();
  }
}

function atualizacaoLista() {
  let listaAmigo = document.getElementById("listaAmigo");
  listaAmigo.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    listaAmigo.appendChild(item);
  }
}

function sorteioNome() {
  if (amigos.length < 2) {
    alert("Por favor, adicione um nome.");
    return;
  } else {
    let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O seu amigo secreto é ${nomeSorteado}!`;
  }
}