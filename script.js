var _local_storage
var lista_tarefas = new Array();

//CRIANDO OBJETO TAREFA
var tarefa = {
    descricao: '',
    tarefaFeita: false,
}

//VARIAVEIS
let tarefas = new Array()


function addTarefa() {
    var valor_tarefa = document.getElementById('tarefa')

    //PREENCHE O OBJETO TAREFA
    tarefa.descricao = valor_tarefa.value
    tarefa.tarefaFeita = false

    criarLista(valor_tarefa.value.trim(), true);


    // Pega a lista já cadastrada, se não houver vira um array vazio
    lista_tarefas = JSON.parse(localStorage.getItem('Tarefas') || '[]');
    // Adiciona pessoa ao cadastro
    lista_tarefas.push(tarefa);

    // Salva a lista alterada
    localStorage.setItem("Tarefas", JSON.stringify(lista_tarefas));

    //FUNCOES DOS ELEMENTOS CRIADOS
    //chkbox.onclick = function () {
    //    if (chkbox.checked == true) {
    //        label.style.textDecoration = 'line-through'
    //    } else {
    //        label.style.textDecoration = 'none'
    //    }
    //};

    //LIMPA O CAMPO DE ADD TAREFA
    document.getElementById('tarefa').value = ''

}

function criarLista(valorTarefa, situacao) {
    //CRIA UMA VARIAVEL PARA A LISTA
    var ul = document.getElementById("listaTarefas")

    //CRIAÇÃO DOS ELEMENTOS 'LI/INPUT/LABEL/BUTTON' PARA SER ADICIONADO NA PAGINA
    var li = document.createElement("li")
    var chkbox = document.createElement('input')
    var botao = document.createElement('button')
    //var label = document.createElement('label')

    //ALTERA ALGUMA PROPRIEDADE
    chkbox.type = 'checkbox'
    //label.value = indice
    //label.innerText = valor_tarefa.value
    botao.innerText = 'X'
    botao.setAttribute('id', valorTarefa)
    chkbox.setAttribute('id', valorTarefa, situacao)

    //INSERE O O VALOR DO INPUT NO ELEMENTO
    li.appendChild(chkbox)
    li.appendChild(document.createTextNode(valorTarefa));
    //li.appendChild(label)
    li.appendChild(botao)

    //O ELEMENTO CRIADO E INSERIDO NA LISTA
    ul.appendChild(li)

    //REMOVE O ELEMENTO
    botao.onclick = function () { excluir(this) }
    chkbox.onclick = function () { taxar(this) }
}


function taxar(elemento) {
    if (elemento.checked == true) {
        elemento.parentElement.style.textDecoration = 'line-through'

        //EXCLUI O ELEMENTO
        var objeto = JSON.parse(_local_storage);

        //alert(elemento.id)
        var guardaId = elemento.id

        var novo_array = lista_tarefas.filter(valor => valor.descricao !== elemento.id)

        objeto.descricao = novo_array

        _local_storage = JSON.stringify(objeto.descricao)
        localStorage.setItem('Tarefas', _local_storage)

        //VALOR ATUALIZADO
        tarefa.descricao = guardaId
        tarefa.tarefaFeita = true
        novo_array.push(tarefa)

       // Pega a lista já cadastrada, se não houver vira um array vazio
        lista_tarefas = JSON.parse(localStorage.getItem('Tarefas') || '[]')
        // Adiciona pessoa ao cadastro
        lista_tarefas.push(tarefa)
        // Salva a lista alterada
        localStorage.setItem("Tarefas", JSON.stringify(lista_tarefas))

        
    } else {
        elemento.parentElement.style.textDecoration = 'none'
        
        //EXCLUI O ELEMENTO
        var objeto = JSON.parse(_local_storage);

        //alert(elemento.id)
        var guardaId = elemento.id

        var novo_array = lista_tarefas.filter(valor => valor.descricao !== elemento.id)

        objeto.descricao = novo_array

        _local_storage = JSON.stringify(objeto.descricao)
        localStorage.setItem('Tarefas', _local_storage)

        //VALOR ATUALIZADO
        tarefa.descricao = guardaId
        tarefa.tarefaFeita = false
        novo_array.push(tarefa)

       // Pega a lista já cadastrada, se não houver vira um array vazio
        lista_tarefas = JSON.parse(localStorage.getItem('Tarefas') || '[]')
        // Adiciona pessoa ao cadastro
        lista_tarefas.push(tarefa)
        // Salva a lista alterada
        localStorage.setItem("Tarefas", JSON.stringify(lista_tarefas))
    }
}

function excluir(elemento) {
    _local_storage = localStorage.getItem('Tarefas')

    var objeto = JSON.parse(_local_storage);

    var novo_array = lista_tarefas.filter(valor => valor.descricao !== elemento.id);

    objeto.descricao = novo_array;

    _local_storage = JSON.stringify(objeto.descricao);
    localStorage.setItem('Tarefas', _local_storage);

    elemento.parentElement.remove()

}

//function taxar(elemento){
//    if(chkbox.value = fa){

//    }
//}

window.onload = function carregar() {
    _local_storage = localStorage.getItem('Tarefas')

    var objeto = JSON.parse(_local_storage);

    lista_tarefas = objeto

    console.log(lista_tarefas)

    objeto.forEach(valor => {    
        criarLista(valor.descricao, valor.tarefaFeita)
        //
       
    })
    
}

