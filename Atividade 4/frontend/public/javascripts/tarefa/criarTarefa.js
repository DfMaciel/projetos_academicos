function CriarTarefa () {
    const form = document.querySelector('.formTarefa');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const data = new Date();

        const opcoesSelecionadas = Array.from(form.elements.usuarios.selectedOptions).map(option => option.value);

        const formData = {
            tarefa_titulo: form.elements.titulo.value,
            tarefa_conteudo: form.elements.conteudo.value,
            tarefa_data: data,
            clientes: opcoesSelecionadas
        };

        console.log(formData);
        fetch('http://localhost:5000/criarTarefa', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível criar a tarefa. Tente novamente mais tarde.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Tarefa criada com sucesso!');
        })
        .catch(error => { 
            console.log(error);
            alert('Erro ao criar tarefa', error)
        });
    })
}

CriarTarefa();