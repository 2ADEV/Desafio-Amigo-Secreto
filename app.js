// Desafio Amigo Secreto

//Incio Lista de amigos
let nome = "";
//criando a função de salavar
function salvarNome(){
    nome = document.getElementById("nome").value;
    if(nome == ""){
        alert("Por favor, preencha o campo nome");
    }
    else{
        listaDeAmigos.push(nome);
        document.getElementById("nome").value = "";
        atualizarLista();
    }
}
//Criando lista vazia
let listaDeAmigos = [];
//Criando function para adicionar amigos
function adicionarAmigo(){
    let nome = document.getElementById("nome").value;
    if(nome == ""){
        alert("Por favor, preencha o campo nome");
    }
    else{
        listaDeAmigos.push(nome);
        document.getElementById("nome").value = "";
        atualizarLista();
    }
}
//Atualizando lista de amigos
function atualizarLista(){
    let lista = document.getElementById("lista");
    lista.innerHTML = "";
    for(let i = 0; i < listaDeAmigos.length; i++){
        lista.innerHTML += "<li>" + listaDeAmigos[i] + "</li>";
    }
}
//Função sorterar amigo
function sortearAmigo(){
    if(lista.length ==0){
        alert("Por favor, adicione amigos na lista");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];
    if(amigoSorteado == nome){
        alert("Você tirou você mesmo, tente novamente");
        return;
    }
    document.getElementById("amigo-sorteado").innerHTML = amigoSorteado;
    //reiiniciar lista
    function reiniciar(){
        listaDeAmigos = [];
        atualizarLista();
        document.getElementById("amigo-sorteado").innerHTML = "";
    }
}
