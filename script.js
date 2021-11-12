let indice = 0

//CRIANDO OBJETO TAREFA
var tarefa = {
    id: null,
    descricao: '',
    tarefaFeita: false,
}

//VARIAVEIS
let tarefas = new Array()


function addTarefa() {


    //PREENCHE O OBJETO TAREFA
    tarefa.id = indice
    tarefa.descricao = document.getElementById('tarefa').value
    tarefa.tarefaFeita = false

    //INSERE NO VETOR
    tarefas.push(tarefa)

    alert(tarefas.pop().id)

    
    
    //INSERE NO LOCALSTORAGE 
    const listaJson = JSON.stringify(tarefas)
    indice++

    localStorage.setItem('Tarefas ', listaJson)
    


    
    //CRIA UMA VARIAVEL PARA A LISTA
    var ul = document.getElementById("listaTarefas")

    //CRIAÇÃO DOS ELEMENTOS 'LI/INPUT/LABEL/BUTTON' PARA SER ADICIONADO NA PAGINA
    var li = document.createElement("li")
    var chkbox = document.createElement('input')
    var botao = document.createElement('button')
    var label = document.createElement('label')

    //ALTERA ALGUMA PROPRIEDADE
    chkbox.type = 'checkbox'
    label.value = indice
    label.innerText = tarefas.pop().descricao
    botao.innerText = 'X'

    //INSERE O O VALOR DO INPUT NO ELEMENTO
    li.appendChild(chkbox)
    li.appendChild(label)
    li.appendChild(botao)

    //O ELEMENTO CRIADO E INSERIDO NA LISTA
    ul.appendChild(li)

    //FUNCOES DOS ELEMENTOS CRIADOS
    chkbox.onclick = function () {
        if (chkbox.checked == true) {
            label.style.textDecoration = 'line-through'
        } else {
            label.style.textDecoration = 'none'
        }
    };

    //REMOVE O ELEMENTO
    botao.onclick = function () { excluir(this)}
        //chkbox.remove()
        //label.remove()
        //botao.remove()

        //localStorage.removeItem('Tarefa ' + label.value)
    //}

    //LIMPA O CAMPO DE ADD TAREFA
    document.getElementById('tarefa').value = ''

}
chkbox.onclick = function () {
    if (chkbox.checked == true) {
        label.style.textDecoration = 'line-through'
    } else {
        label.style.textDecoration = 'none'
    }
}

function excluir(element){
    element.parentElement.remove()
}


function carregaLista() {
  
    


}