const modal = document.getElementById("criarAnotacao");
const botao = document.getElementById("abrirModalAnotacao");
const span = document.getElementById("fechaModal");

botao.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}