import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from 'typeorm';
import Cliente from './cliente';

@Entity({name: 'anotacao'})
export default class Anotacao {

    @PrimaryGeneratedColumn({type: 'int'})
    anotacao_id: number

    @Column({type: 'varchar', length: 40, nullable: false})
    anotacao_titulo: string

    @Column({type: 'varchar', length: 500, nullable: false})
    anotacao_conteudo: string
    
    @Column({type: 'datetime', nullable: false})
    anotacao_data: Date
    
    @ManyToOne(() => Cliente, cliente => cliente.anotacao)
    cliente: Cliente
}