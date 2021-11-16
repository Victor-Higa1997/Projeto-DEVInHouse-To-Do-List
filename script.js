var formulario = document.body.querySelector('form');
var _local_storage

//CRIANDO OBJETO TAREFA
var tarefa = {
    descricao: '',
    tarefaFeita: false,
}

//ADICIONA UMA NOVA TAREFA NA LISTA E NO LOCALSTORAGE
function addTarefa() {
    var lista_tarefas = new Array();

    //PEGA O VALOR DO INPUT DIGITADO E COLOCA EM UMA VARIAVEL
    var valor_tarefa = document.getElementById('tarefa')

    if (formulario.checkValidity()) {
        //PREENCHE O OBJETO COM A TAREFA
        tarefa.descricao = valor_tarefa.value

        //CHAMA A FUNCAO PARA CRIAR UMA LISTA PASSANDO O VALOR DO INPUT + DEIXA O CHECKBOX COMO FALSE
        criarLista(valor_tarefa.value.trim(), false);

        //PEGA A LISTA JA CADASTRADA, SE NAO HOUVER CRIA UMA VAZIA
        lista_tarefas = JSON.parse(localStorage.getItem('Tarefas') || '[]');

        lista_tarefas.push(tarefa);
        
        //SALVA A LISTA ALTERADA
        localStorage.setItem("Tarefas", JSON.stringify(lista_tarefas));

        //LIMPA O CAMPO DE ADD TAREFA
        setTimeout(() => valor_tarefa.blur(), 0);
        valor_tarefa.value = '';
    }
}

//CRIA A LISTA E INSERE OS ELEMENTOS
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
        li.style.color = 'gray'
    } else {
        li.style.textDecoration = 'none'
        li.style.color = 'black'
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
//FUNÇÃO PARA TACHAR TAREFA 
function tachada(elemento) {
    _local_storage = localStorage.getItem('Tarefas')

    var objeto = JSON.parse(_local_storage)

    if (elemento.checked == true) {
        for (var i = 0; i < objeto.length; i++) {
            if (objeto[i].descricao == elemento.id) {
                objeto[i].tarefaFeita = true
                elemento.parentElement.style.textDecoration = 'line-through'
                elemento.parentElement.style.color = 'gray'
                localStorage.setItem('Tarefas', JSON.stringify(objeto));
                break
            }
        }
    } else {
        for (var i = 0; i < objeto.length; i++) {
            if (objeto[i].descricao == elemento.id) {
                objeto[i].tarefaFeita = false
                elemento.parentElement.style.textDecoration = 'none'
                elemento.parentElement.style.color = 'black'
                localStorage.setItem('Tarefas', JSON.stringify(objeto));
                break
            }
        }
    }
}

//EXCLUI O OBJETO FILTRADO E ARMAZENA O RESTANTE DOS DADOS EM UMA NOVA VARIAVEL E É INSERIDA NO LOCALSTORAGE
function excluir(elemento) {
    var resultado = confirm('Deseja realmente excluir a tarefa "' + elemento.id + '"?')

    if (resultado == true) {

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

//AO CARREGAR A PAGINA JÁ ADICIONA OS ELEMENTOS CONFORME OS OBJETOS SALVOS NO LOCALSTORAGE
window.onload = function carregar() {
    if (localStorage.getItem('Tarefas') != null) {

        _local_storage = localStorage.getItem('Tarefas')

        var objeto = JSON.parse(_local_storage);

        lista_tarefas = objeto

        //LOOP PARA CRIAÇÃO DOS ELEMENTOS CONFORME O LOCALSTORAGE
        objeto.forEach(valor => {
            criarLista(valor.descricao, valor.tarefaFeita)
        })
    }
}

