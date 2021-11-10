function addTarefa(){
    //ARMAZENA O VALOR INSERIDO NO INPUT EM UMA VARIAVEL
    var tarefa = document.getElementById("tarefa").value
    //CRIA UMA VARIAVEL PARA A LISTA
    var lista = document.getElementById("listaTarefas")
    
    //CRIAÇÃO DOS ELEMENTOS 'LI/INPUT/LABEL/BUTTON' PARA SER ADICIONADO NA PAGINA
    var li = document.createElement("li")
    var chkbox = document.createElement('input')
    var botao = document.createElement('button')
    var label = document.createElement('label')

    //ALTERA ALGUMA PROPRIEDADE
    chkbox.type = 'checkbox'
    label.innerText = tarefa + ' '
    botao.innerText = 'X'
    
    //FUNCOES DOS ELEMENTOS CRIADOS
    chkbox.onclick = function () {
        label.innerHTML = "teste de troca"
        localStorage.setItem('teste', label.innerText)
    };


    //INSERE O O VALOR DO INPUT NO ELEMENTO
    li.appendChild(chkbox)
    li.appendChild(label)
    li.appendChild(botao)


    //O ELEMENTO CRIADO E INSERIDO NA LISTA
    lista.appendChild(li)

    //LIMPA O CAMPO DE ADD TAREFA
    document.getElementById('tarefa').value = ''

}
function sublinhar(){
    if (document.getElementsByClassName('checkbox').value = true){
        alert('ola')
        
        
    }
}