// Desafio Amigo Secreto

//Incio Lista de amigos
let Amigos = [];
//Adicionando amigos
function adicionarAmigo() {
    let nome = document.getElementById('nome-amigo').value;
    if(nomeAmigo!=='') {
        Amigos.push(nome);
        document.getElementById('nome-amigo').value = '';
        listarAmigos();
    }
    //Listando amigos
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = ''; // Limpa a lista atual
    //Exibindo amigos da lista
    amigos.forEach(amigo => {
        let item = document.createElement('p');
        item.textContent = amigo;
        lista.appendChild(item);
    });
    //Limpando o campo depois de adicionar
    document.getElementById('nome-amigo').value = '';
    }
//Embaralhando a lista de amigos
function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];//troca de posiçao
    }
    return array;
}
//Sortear amigo secreto 
function sortear() {
    // Verifica se há pelo menos dois amigos para sortear
    if (amigos.length >= 2) {
        // Embaralha a lista de amigos
        let amigosEmbaralhados = embaralhar([...amigos]);
        //Lista resultado
        let listaSorteio = document.getElementById('lista-sorteio');
        listaSorteio.innerHTML = ''; // Limpa o resultado anterior
        // Pareia os amigos (o último amigo sorteado pega o primeiro)
        for (let i = 0; i < amigosEmbaralhados.length; i++) {
            let amigo1 = amigosEmbaralhados[i];
            let amigo2 = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length]; // Cicla a lista para o primeiro amigo
            let item = document.createElement('p');
            item.textContent = `${amigo1} pega ${amigo2}`;
            listaSorteio.appendChild(item);
        }
    } else {
        alert('Adicione pelo menos dois amigos para sortear.');
    }
}
// Função para reiniciar a lista de amigos e limpar as áreas exibidas
function reiniciar() {
    // Limpa a lista de amigos
    amigos = [];
    // Limpa a exibição da lista de amigos
    document.getElementById('lista-amigos').innerHTML = '';

    // Limpa o resultado do sorteio
    document.getElementById('lista-sorteio').textContent = '';
}
