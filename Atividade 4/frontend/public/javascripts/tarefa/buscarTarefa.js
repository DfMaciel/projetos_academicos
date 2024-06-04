function BuscarTarefas() {
    return fetch('http://localhost:5000/verTarefas', {
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
        return resposta.tarefas || [];
    })
    .catch(error => {
        console.error('Erro ao buscar tarefas:', error);
    })
}

function MostrarTarefas(tarefas) {
    const containerTarefas = document.getElementsByClassName('containerTarefas')[0];
    console.log(tarefas)

    if (tarefas.length === 0) {
        containerTarefas.innerHTML = '<h1>Nenhuma tarefa cadastrada</h1>';
    }
    else {
        for (let tarefa of tarefas) {
            const tarefaDiv = document.createElement('div')
            tarefaDiv.className = 'tarefa';
            tarefaDiv.innerHTML = `
                <h2>${tarefa.tarefa_nome}</h2>
                <p class="conteudoTarefa">${tarefa.tarefa_descricao}</p>
                <p class="dataTarefa">${formatarData(tarefa.tarefa_data)}</p>
            `;
            containerTarefas.appendChild(tarefaDiv)
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

BuscarTarefas().then(MostrarTarefas);