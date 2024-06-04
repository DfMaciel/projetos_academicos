async function BuscarUsuarios() {
    return fetch('http://localhost:5000/verUsuarios', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
    }})
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro no servidor, tente mais tarde');
        }
        return response.json()
    })
    .then(resposta => {
        console.log(resposta.usuarios)
        return resposta.usuarios || [];
    })
    .catch(error => {verUsuarios
        console.error('Erro ao buscar usuários:', error);
    })
}

BuscarUsuarios().then(usuarios => {

    const seletorUsuarios = document.getElementById('usuarios');

    usuarios.forEach(usuario => {
        const opcao = document.createElement("option");
        opcao.value = usuario.cli_id;
        opcao.text = usuario.cli_nome;
        seletorUsuarios.appendChild(opcao);
    })
})
.catch(error => {
    console.error('Erro ao buscar usuários:', error);
})

$(document).ready(function() {
    $('#usuarios').select2({
        placeholder: "Escolha os usuários",
        language: {
            noResults: function() {
                return "Nenhum resultado encontrado";
            }
        },
        dropdownParent: $('#criarTarefa')
    });
});