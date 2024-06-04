import { Connection } from "../config/data-source";
import { In } from 'typeorm';
import Cliente from '../entities/cliente';
import Tarefa from '../entities/tarefa';

// import { TarefaView, CriarTarefa } from "../interfaces/iTarefa";

export async function BuscarUsuario() {
    const clienteRepository = Connection.getRepository('cliente')
    try {
        const usuarios = await clienteRepository.find()
    console.log(usuarios)

    if (!usuarios) {
        return { success: false, message: 'Usuários não encontrados' }
    }
    return { success: true, message: 'Usuários encontrados', usuarios: usuarios}
    } catch (error) {
        console.error('Erro ao buscar usuários: ', error)
        return { success: false, message: 'Erro ao buscar usuários'}
    }
}

export async function CriarTarefas(formData) {
    const tarefaRepository = Connection.getRepository('tarefa')
    const clienteRepository = Connection.getRepository('cliente')
    try {
        const clienteIds = formData.clientes.map(Number);
        const clientes = await clienteRepository.findBy({ cli_id: In(clienteIds) })
        console.log(clientes);
        const novaTarefa =  await tarefaRepository.create({
            tarefa_nome: formData.tarefa_titulo,
            tarefa_descricao: formData.tarefa_conteudo,
            tarefa_data: formData.tarefa_data,
            clientes: clientes
        })
        const novaTarefaEnviada = await tarefaRepository.save(novaTarefa)
        console.log('Tarefa criada com sucesso!', novaTarefaEnviada)
        return { success: true, message: 'Tarefa criada com sucesso!' }
    } catch (error) {
        console.error('Erro ao criar tarefa ', error)
        return { success: false, message: 'Erro ao criar tarefa'}
    }
}

export async function BuscarTarefa(token: string) {
    const clienteRepository = Connection.getRepository(Cliente)
    const tarefaRepository = Connection.getRepository(Tarefa)

    try {
        const cli_id = Number(token)
        console.log(cli_id)
        const cliente = await clienteRepository.findOne({
            where: { cli_id: cli_id},
            relations: ['tarefas'] 
        });
           if (!cliente) {
                return { success: false, message: 'Cliente não encontrado' }
            }
        console.log(cliente.tarefas)
        return { success: true, message: 'Tarefas encontradas', tarefas: cliente.tarefas}
    } catch (error) {
        console.error('Erro ao buscar tarefas: ', error)
        return { success: false, message: 'Erro ao buscar tarefas'}
    }
}