var addButton = document.getElementById('btnAdicionar')
var textContent = document.getElementById('textItem')
var listContainer = document.getElementById('list')

var todoList = []
carregarLocalStorage()

// ADICIONAR UM ITEM NA LISTA
function adicionarItem(){
    var newItem = textContent.value;
    if (newItem){
        criarItem(newItem);
        salvarItemNoLocalStorage(newItem); 
        textContent.value = '';
    }
    else{
        alert('Por favor digite um item')
    }
}


// CRIAR UM ITEM A SER ADICIONADO
function criarItem(itemText){

    //CRIANDO O LI
    var liItem = document.createElement('li');
    //CRIANDO O BOTÃO DE CHECK
    var checkBtn = document.createElement('button');
    checkBtn.classList.add('check')
    checkBtn.textContent = 'Feito!'
    //CRIANDO BOTÃO DELET
    var deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete')
    deleteBtn.textContent = 'Deletar!'
    //CRIANDO SPAN
    var spanItem = document.createElement('span');
    spanItem.textContent = itemText;
    //ADICIONANDO OS ITEMS AS TAGS
    listContainer.appendChild(liItem);
    liItem.appendChild(checkBtn);
    liItem.appendChild(spanItem);
    liItem.appendChild(deleteBtn);

    checkBtn.addEventListener('click', marcarComoFeito)
    function marcarComoFeito(){
        spanItem.classList.add('feito');
    }
    deleteBtn.addEventListener('click', deletarItem)

    function deletarItem(){
        if (confirm('Deseja deletar este item?') == true)
            listContainer.removeChild(liItem);
            localStorage.removeItem(liItem);
            var listaDeItens = JSON.parse(localStorage.getItem('todoList'));   
          }
}

//SALVAR NO LOCAL STORAGE
function salvarItemNoLocalStorage(todo){
    todoList.push(todo);
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

// CARREGAR LOCAL STORAGE
function carregarLocalStorage(){
    var todosSalvos = JSON.parse(localStorage.getItem('todoList'));
    if (todosSalvos) {
        todoList = todosSalvos;
        for (var i = 0; i < todoList.length; i++){
            criarItem(todoList[i]);
        }
    }
}



addButton.addEventListener('click', adicionarItem)
textContent.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        adicionarItem()
    }
 })