export interface AnotacaoView {
    anotacao_id: string
    anotacao_titulo: string
    anotacao_conteudo: string
    anotacao_data: Date
}

export interface CriarAnotacao {
    anotacao_titulo: string
    anotacao_conteudo: string
    anotacao_data: Date
    cliente: string
}