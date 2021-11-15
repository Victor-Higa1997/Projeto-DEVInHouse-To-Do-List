var _local_storage

//CRIANDO OBJETO TAREFA
var tarefa = {
    descricao: '',
    tarefaFeita: false,
}

function addTarefa() {
    var lista_tarefas = new Array();

    //PEGA O VALOR DO INPUT DIGITADO E COLOCA EM UMA VARIAVEL
    var valor_tarefa = document.getElementById('tarefa')

    //PREENCHE O OBJETO COM A TAREFA
    tarefa.descricao = valor_tarefa.value

    //CHAMA A FUNCAO PARA CRIAR UMA LISTA PASSANDO O VALOR DO INPUT + DEIXA O CHECKBOX COMO FALSE
    criarLista(valor_tarefa.value.trim(), false);

    //PEGA A LISTA JA CADASTRADA, SE NAO HOUVER CRIA UMA VAZIA
    lista_tarefas = JSON.parse(localStorage.getItem('Tarefas') || '[]');

    //ADICIONA O OBJETO PESSOA NA LISTA
    lista_tarefas.push(tarefa);

    //SALVA A LISTA ALTERADA
    localStorage.setItem("Tarefas", JSON.stringify(lista_tarefas));

    //LIMPA O CAMPO DE ADD TAREFA
    document.getElementById('tarefa').value = ''

}

function criarLista(valorTarefa, situacao) {
    //ARMAZENA O ELEMENTO LISTA UL EM UMA VARIAVEL
    var ul = document.getElementById("listaTarefas")

    //CRIAÇÃO DOS ELEMENTOS 'LI/INPUT/BUTTON' PARA SER ADICIONADO NA PAGINA
    var li = document.createElement("li")
    var chkbox = document.createElement('input')
    var botao = document.createElement('button')

    //ALTERA A PROPRIEDADE DOS ELEMENTOS
    chkbox.type = 'checkbox'
    chkbox.checked = situacao
    botao.innerText = 'X'
    botao.setAttribute('id', valorTarefa)
    chkbox.setAttribute('id', valorTarefa)

    //SE O CHECKBOX FOR TRUE ELE TRAS A TAREFA TACHADA
    if (chkbox.checked == true) {
        li.style.textDecoration = 'line-through'
    } else {
        li.style.textDecoration = 'none'
    }

    //INSERE O O VALOR DO INPUT NO ELEMENTO
    li.appendChild(chkbox)
    li.appendChild(document.createTextNode(valorTarefa));
    li.appendChild(botao)

    //O ELEMENTO CRIADO E INSERIDO NA LISTA
    ul.appendChild(li)

    //REMOVE O ELEMENTO
    botao.onclick = function () { excluir(this) }
    chkbox.onclick = function () { tachada(this) }
}

function tachada(elemento) {
    _local_storage = localStorage.getItem('Tarefas')

    var objeto = JSON.parse(_local_storage)

    if (elemento.checked == true) {
        for (var i = 0; i < objeto.length; i++) {
            if (objeto[i].descricao == elemento.id) {
                objeto[i].tarefaFeita = true
                elemento.parentElement.style.textDecoration = 'line-through'
                localStorage.setItem('Tarefas', JSON.stringify(objeto));
                break
            }
        }

    }else{
        for (var i = 0; i < objeto.length; i++) {
            if (objeto[i].descricao == elemento.id) {
                objeto[i].tarefaFeita = false
                elemento.parentElement.style.textDecoration = 'none'
                localStorage.setItem('Tarefas', JSON.stringify(objeto));
                break
            }
        }    
    }
}

function excluir(elemento) {
    var resultado = confirm('Deseja realmente excluir a tarefa "' + elemento.id + '"?')

    if(resultado == true){

    //ARMAZENA OS DADOS DO LOCALSTORAGE EM UMA VARIAVEL
    _local_storage = localStorage.getItem('Tarefas')

    //FAZ A CONVERSAO E ARMAZENA EM OUTRA VARIAVEL
    var objeto = JSON.parse(_local_storage);

    var novo_array = objeto.filter(valor => valor.descricao !== elemento.id);

    objeto.descricao = novo_array;

    _local_storage = JSON.stringify(objeto.descricao);
    localStorage.setItem('Tarefas', _local_storage);

    elemento.parentElement.remove()
    }

}


window.onload = function carregar() {
    if (localStorage.getItem('Tarefas') != null) {

        _local_storage = localStorage.getItem('Tarefas')

        var objeto = JSON.parse(_local_storage);

        lista_tarefas = objeto

        objeto.forEach(valor => {
            criarLista(valor.descricao, valor.tarefaFeita)
        })
    }
}

