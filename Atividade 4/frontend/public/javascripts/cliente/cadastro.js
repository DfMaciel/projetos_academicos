const form = document.querySelector('.formCadastro');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        cli_nome: form.elements.nome.value,
        cli_email: form.elements.email.value,
        cli_senha: form.elements.senha.value
    };
    console.log(formData);
    fetch('http://localhost:5000/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Não foi possível cadastrar o usuário. Tente novamente mais tarde.');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert('Usuário cadastrado com sucesso!');
        window.location.href = '/login';
    })
    .catch(error => { 
        console.log(error);
        alert('Erro no cadastro', error)
    });
});