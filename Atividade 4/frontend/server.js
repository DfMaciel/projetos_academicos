const path = require('path');
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('homeLogado', { title: 'Anotações'})
})

app.get('/cadastro', (req, res) => {
    res.render('cadastro', { title: 'Cadastro'})
})

app.get('/login', (req, res) => {
    res.render('login', { title: 'Login'})
})

app.get('/tarefas', (req, res) => {
    res.render('tarefas', { title: 'Tarefas'})
})

app.listen(3000, () => console.log('O servidor está rodando na porta 3000'));