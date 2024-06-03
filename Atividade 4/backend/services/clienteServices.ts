import { Connection } from "../config/data-source";
import {CriarCliente, LogarCliente} from "../interfaces/iCliente";

export async function CadastrarCliente (formData: CriarCliente) {
    const clienteRepository = Connection.getRepository('cliente')

    try {
        const cliente = await clienteRepository.findOne({
            where: { cli_email: formData.cli_email }
        })
        console.log(cliente)
        
        if (cliente) {
            return { success: false, message: 'E-mail já cadastrado' }
        }

        const novoCliente = clienteRepository.create(formData)
        await clienteRepository.save(novoCliente)
        console.log('Cliente cadastrado com sucesso!', novoCliente)
        return { success: true, message: 'Cliente cadastrado com sucesso!' }
    } catch (error) {
        console.error('Erro ao cadastrar cliente: ', error)
        return { success: false, message: 'Erro ao cadastrar cliente'}
    }
}

export async function LogarCliente (formData: LogarCliente) {
    const clienteRepository = Connection.getRepository('cliente')
    console.log('Logando cliente', formData)
    try {
        const cliente = await clienteRepository.findOne({
            where: { cli_email: formData.cli_email }
        })
        console.log(cliente,'ue')

        if (!cliente) {
            return { success: false, message: 'E-mail não cadastrado' }
        }

        if (cliente.cli_senha !== formData.cli_senha) {
            return { success: false, message: 'Senha incorreta' }
        }

        console.log('Cliente logado com sucesso!', cliente)
        return { success: true, message: 'Cliente logado com sucesso!', cli_id: cliente.cli_id }
    } catch (error) {
        console.error('Erro ao logar cliente: ', error)
        return { success: false, message: 'Erro ao logar cliente'}
    }
}