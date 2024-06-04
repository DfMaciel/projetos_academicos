import { BuscarUsuario, CriarTarefas, BuscarTarefa } from "../services/tarefaServices"

export async function BuscarUsuarios(req, res) {
    try {
        console.log('Recebendo get em /BuscarUsuários')
        const resultado = await BuscarUsuario()
        if (!resultado.success) {
            return res.status(400).json({ message: resultado.message })
        }
        return res.status(201).json({ message: resultado.message, usuarios: resultado.usuarios})
    } catch (error) {
        console.error('Erro ao buscar usuários: ', error)
        return res.status(500).json({ message: 'Erro ao buscar usuários' })
    }
}

export async function CriarTarefa(req,res) {
    try {
        console.log('Recebendo post em /CriarTarefa', req.body)
        const resultado = await CriarTarefas(req.body)
        if (!resultado.success) {
            return res.status(400).json({ message: resultado.message })
        }
        return res.status(201).json({ message: resultado.message})
    } catch (error) {
        console.error('Erro ao criar tarefa ', error)
        return res.status(500).json({ message: 'Erro ao criar tarefa' })
    }
}

export async function BuscarTarefas(req, res) {
    try {
        console.log('Recebendo get em /BuscarTarefas')
        const formData = req.body
        const authHeader = req.headers.authorization
        const token = authHeader && authHeader.split(' ')[1]
        const resultado = await BuscarTarefa(token)
        if (!resultado.success) {
            return res.status(400).json({ message: resultado.message })
        }
        return res.status(201).json({ message: resultado.message, tarefas: resultado.tarefas})
    } catch (error) {
        console.error('Erro ao buscar tarefas: ', error)
        return res.status(500).json({ message: 'Erro ao buscar tarefas' })
    }
}