import { VerAnotacoes, CriarAnotacoes } from "../services/anotacaoServices"

export async function VerAnotacao(req, res) {
    try {
        console.log('Recebendo post em /VerAnotacoes', req.body)
        const formData = req.body
        const authHeader = req.headers.authorization
        const token = authHeader && authHeader.split(' ')[1]
        console.log(token)
        const resultado = await VerAnotacoes(token)
        
        if (!resultado.success) {
            return res.status(400).json({ message: resultado.message })
        }
        return res.status(201).json({ message: resultado.message, anotacoes: resultado.anotacoes})
    } catch (error) {
        console.error('Erro ao buscar anotações: ', error)
        return res.status(500).json({ message: 'Erro ao buscar anotações' })
    }
}

export async function CriarAnotacao(req, res) {
    try {
        console.log('Recebendo post em /CriarAnotacao', req.body)
        const formData = req.body
        const authHeader = req.headers.authorization
        const token = authHeader && authHeader.split(' ')[1]
        const resultado = await CriarAnotacoes(formData, token)

        if (!resultado.success) {
            return res.status(400).json({ message: resultado.message })
        }
        return res.status(200).json({ message: resultado.message})
    } catch (error) {
        console.error('Erro ao criar anotação ', error)
        return res.status(500).json({ message: 'Erro ao criar anotação' })
    }
}