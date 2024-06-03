import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { Connection } from './config/data-source'
import CadastroRouter from './rotas/clienteRoutes';
import AnotacaoRouter from './rotas/anotacaoRoutes'

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(CadastroRouter)
app.use(AnotacaoRouter)

const conectar = async () => {
    try {
        await Connection.initialize()
        console.log('Conexão realizada com sucesso!');
        const porta = 5000
        app.listen(porta, () => console.log(`Servidor está rodando na porta ${porta}`));
    } catch (error) {
        console.error('Erro ao conectar-se ao Banco de Dados ', error)
    }
}

conectar()

app.get('/backend', (req, res) => {
    res.send('Hello from backend!');
});