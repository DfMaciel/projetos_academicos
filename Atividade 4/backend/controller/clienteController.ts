import { CadastrarCliente, LogarCliente } from "../services/clienteServices"

export async function CadastroCliente (req, res) {
    try {
        console.log('Recebendo post em /CadastroCliente', req.body)
        const formData = req.body
        const resultado = await CadastrarCliente(formData)

        if (!resultado.success) {
            return res.status(400).json({ message: resultado.message })
        }
        return res.status(201).json({ message: resultado.message })
    } catch (error) {
        console.error('Erro ao cadastrar cliente: ', error)
        return res.status(500).json({ message: 'Erro ao cadastrar cliente' })
    }
}

export async function LoginCliente(req, res) {
    try {
        console.log('Recebendo post em /LoginCliente', req.body)
        const formData = req.body
        const resultado = await LogarCliente(formData)

        if (!resultado.success) {
            return res.status(400).json({ message: resultado.message })
        }
        return res.status(200).json({ message: resultado.message, cli_id: resultado.cli_id})
    } catch (error) {
        console.error('Erro ao logar cliente: ', error)
        return res.status(500).json({ message: 'Erro ao logar cliente' })
    }
}