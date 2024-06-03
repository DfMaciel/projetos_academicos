import { Connection } from "../config/data-source";
import { AnotacaoView, CriarAnotacao } from "../interfaces/iAnotacao";

export async function VerAnotacoes (token: string) {
    const anotacaoRepository = Connection.getRepository('anotacao')
    try {
        const anotacao = await anotacaoRepository.find({
            where: {
                cliente: { cli_id: token }
            }
        })
        console.log(anotacao)
        
        if (!anotacao) {
            return { success: false, message: 'Anotações não encontradas' }
        }
        return { success: true, message: 'Anotações encontradas', anotacoes: anotacao}
    } catch (error) {
        console.error('Erro ao buscar anotações: ', error)
        return { success: false, message: 'Erro ao buscar anotações'}
    }
}

export async function CriarAnotacoes (formData: CriarAnotacao, token: string) {
    const anotacaoRepository = Connection.getRepository('anotacao')
    try {
        const novaAnotacao =  await anotacaoRepository.create({
            anotacao_titulo: formData.anotacao_titulo,
            anotacao_conteudo: formData.anotacao_conteudo,
            anotacao_data: formData.anotacao_data,
            cliente: { cli_id: token}
        })
        const novaAnotacaoEnviada = await anotacaoRepository.save(novaAnotacao)
        await anotacaoRepository.save(novaAnotacao)
        console.log('Anotação criada com sucesso!', novaAnotacaoEnviada)
        return { success: true, message: 'Anotação criada com sucesso!' }
    } catch (error) {
        console.error('Erro ao criar anotação ', error)
        return { success: false, message: 'Erro ao criar anotação'}
    }
}