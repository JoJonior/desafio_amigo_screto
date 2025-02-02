//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let array_nomes =[];


function adicionarAmigo(){
    let amigoInput = document.getElementById('amigo');
    
    if(amigoInput.value!=""){
        array_nomes.push(amigoInput.value);
        amigoInput.value='';
        AtualizarLista();
        
        
    }else{
        //ERRO
        alert("Por favor, insira um nome.");
    }
    
    

} 
