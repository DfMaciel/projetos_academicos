const form = document.querySelector('.formLogin');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = {
        cli_email: form.elements.email.value,
        cli_senha: form.elements.senha.value
    };
    console.log(formData);
    fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Não foi possível realizar login.' + response.message);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        alert('Login realizado com sucesso!');
        localStorage.setItem('token', data.cli_id);
        window.location.href = '/homeLogado';
    })
    .catch(error => { 
        console.log(error);
        alert('Erro no login: ' + error)
    });
});