function BuscarNotas() {
    return fetch('http://localhost:5000/verAnotacao', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
    }})
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro no servidor, tente mais tarde');
        }
        return response.json()
    })
    .then(resposta => {
        return resposta.anotacoes || [];
    })
    .catch(error => {
        console.error('Erro ao buscar notas:', error);
    })
}

function MostrarNotas(notas) {
    const containerNotas = document.getElementsByClassName('containerNotas')[0];

    if (notas.length === 0) {
        containerNotas.innerHTML = '<h1>Nenhuma anotação cadastrada</h1>';
    }
    else {
        for (let nota of notas) {
            const anotacao = document.createElement('div')
            anotacao.className = 'anotacao';
            anotacao.innerHTML = `
                <h2>${nota.anotacao_titulo}</h2>
                <p>${nota.anotacao_conteudo}</p>
                <p>${formatarData(nota.anotacao_data)}</p>
            `;
            containerNotas.appendChild(anotacao);
        }
    }
}

function formatarData(dateString) {
    const date = new Date(dateString);
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

BuscarNotas().then(MostrarNotas);