function CriarAnotação () {
    const form = document.querySelector('.formAnotacao');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const data = new Date();

        const formData = {
            anotacao_titulo: form.elements.titulo.value,
            anotacao_conteudo: form.elements.conteudo.value,
            anotacao_data: data
        };

        console.log(formData);
        fetch('http://localhost:5000/criarAnotacao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível criar a anotação. Tente novamente mais tarde.');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Anotação criada com sucesso!');
        })
        .catch(error => { 
            console.log(error);
            alert('Erro ao criar anotação', error)
        });
    })
}

CriarAnotação();