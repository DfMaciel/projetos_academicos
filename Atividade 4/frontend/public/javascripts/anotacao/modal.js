window.onload = function() {
    const modalAnotacao = document.getElementById("criarAnotacao");
    const botaoAnotacao = document.getElementById("abrirModalAnotacao");
    const spanAnotacao = document.getElementById("fechaModal");

    const modalTarefa = document.getElementById("criarTarefa");
    const botaoTarefa = document.getElementById("abrirModalTarefa");
    const spanTarefa = document.getElementById("fechaModalTarefa");

    if (botaoAnotacao && modalAnotacao && spanAnotacao) {
        botaoAnotacao.onclick = function() {
            modalAnotacao.style.display = "block";
            if (modalTarefa) {
                modalTarefa.style.display = "none";
            }
        }

        spanAnotacao.onclick = function() {
            modalAnotacao.style.display = "none";
        }
    }

    if (botaoTarefa && modalTarefa && spanTarefa) {
        botaoTarefa.onclick = function() {
            modalTarefa.style.display = "block";
            if (modalAnotacao) {
                modalAnotacao.style.display = "none";
            }
        }

        spanTarefa.onclick = function() {
            modalTarefa.style.display = "none";
        }
    }
    
    window.onclick = function(event) {
        if (event.target == modalAnotacao) {
            modalAnotacao.style.display = "none";
        }
        if (event.target == modalTarefa) {
            modalTarefa.style.display = "none";
        }
    }
}