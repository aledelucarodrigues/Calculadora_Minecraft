const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .igual ');

// Função para mostrar no visor o item selecionado (clicado)
function insert(valor){
    resultado.innerHTML += valor;
}

// Função para limpar todo o visor, basicamente deixá-lo com o campo zerado
function clean(){
    resultado.innerHTML = '';
}

// Função para limpar o último dado do visor
function backspace(){
    if(resultado.textContent){
        let result = document.getElementById('resultado').innerHTML
        resultado.innerHTML = result.substring(0, result.length -1);
    } 
}

// Função para realizar o cálculo com eval
function confirma(){
    if(resultado.textContent != 'Erro'){
        document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
    }
}
