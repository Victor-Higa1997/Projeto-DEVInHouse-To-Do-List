let indice = 0

function addTarefa(){
    //VARIAVEIS
    let tarefas = []

    //ARMAZENA O VALOR INSERIDO NO INPUT EM UM VETOR
    tarefas[indice] = document.getElementById("tarefa").value
    //CRIA UMA VARIAVEL PARA A LISTA
    var lista = document.getElementById("listaTarefas")
    
    //CRIAÇÃO DOS ELEMENTOS 'LI/INPUT/LABEL/BUTTON' PARA SER ADICIONADO NA PAGINA
    var li = document.createElement("li")
    var chkbox = document.createElement('input')
    var botao = document.createElement('button')
    var label = document.createElement('label')

    //ALTERA ALGUMA PROPRIEDADE
    chkbox.type = 'checkbox'
    label.value = indice
    label.innerText = tarefas[indice]
    botao.innerText = 'X'

    //INSERE O O VALOR DO INPUT NO ELEMENTO
    li.appendChild(chkbox)
    li.appendChild(label)
    li.appendChild(botao)

    //O ELEMENTO CRIADO E INSERIDO NA LISTA
    lista.appendChild(li)
    
    //FUNCOES DOS ELEMENTOS CRIADOS
    chkbox.onclick = function () {
        if(chkbox.checked == true){
            label.style.textDecoration = 'line-through'
        }else{
            label.style.textDecoration = 'none'
        }
    };

    //REMOVE O ELEMENTO
    botao.onclick = function(){
        chkbox.remove()
        label.remove()
        botao.remove()

        localStorage.removeItem('Tarefa ' + label.value )
    }

    //INSERE NO LOCALSTORAGE 
    localStorage.setItem('Tarefa ' + indice, tarefas[indice])
    indice++

    //LIMPA O CAMPO DE ADD TAREFA
    document.getElementById('tarefa').value = ''

}


    function carregaLista(){

       

        var teste = []
        //CRIA UMA VARIAVEL PARA A LISTA
        var lista = document.getElementById("listaTarefas")
        for(let i = 0; i < localStorage.length; i++){
                

            //CRIAÇÃO DOS ELEMENTOS 'LI/INPUT/LABEL/BUTTON' PARA SER ADICIONADO NA PAGINA
            var li = document.createElement("li")
            var chkbox = document.createElement('input')
            var botao = document.createElement('button')
            var label = document.createElement('label')
            
            //ALTERA ALGUMA PROPRIEDADE
            chkbox.type = 'checkbox'
            //label.value = localStorage.key()
            label.innerText = 'sld'
            botao.innerText = 'X'
            label.innerText = localStorage.getItem(localStorage.key(i))
        
            //INSERE O O VALOR DO INPUT NO ELEMENTO
            li.appendChild(chkbox)
            li.appendChild(label)
            li.appendChild(botao)

            
            //O ELEMENTO CRIADO E INSERIDO NA LISTA
            lista.appendChild(li)

            //REMOVE O ELEMENTO
            botao.onclick = function(){
            chkbox = remove()
            label = remove()
            botao = remove()
 
        }
            

        }
        

        chkbox.onclick = function () {
            if(chkbox.checked == true){
                label.style.textDecoration = 'line-through'
            }else{
                label.style.textDecoration = 'none'
            }
        };


    } 



        
        

