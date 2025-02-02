//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let array_nomes =[];


function adicionarAmigo(){
    let amigoInput = document.getElementById('amigo');
    
    if(amigoInput.value!=""){
        array_nomes.push(amigoInput.value);
        amigoInput.value='';
        atualizarLista();
        
        
    }else{
        //ERRO
        alert("Por favor, insira um nome.");
    }
    
    

} 

function atualizarLista(){
    let campoAmigosLista =  document.getElementById("listaAmigos")
    var strArray=''
    for (var i = 0; i < array_nomes.length; i++){
          strArray = strArray == '' ? "<li>"+array_nomes[i]+"</li>" : strArray+"<li>"+array_nomes[i]+"</li>"
          "<li>"+array_nomes[i]+"</li>"
          
    }
    campoAmigosLista.innerHTML = strArray

}

function sortearAmigo(){
    if (array_nomes.length>1){
        let id_sorteado = parseInt((Math.random() * array_nomes.length ));
        console.log(array_nomes[id_sorteado]+ " ID: "+ id_sorteado);

        let campoResultado = document.getElementById("resultado")
        campoResultado.innerHTML= "O amigo secreto sorteado é: "+  array_nomes[id_sorteado]
        document.getElementById("listaAmigos").innerHTML=""
        ///array_nomes=[]
       
    }else{
        alert("Nenhum amigo para sortear.");
        document.getElementById("resultado").innerHTML= ""
    }
    
}