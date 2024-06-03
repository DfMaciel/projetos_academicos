import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import Anotacao from './anotacao';
import Tarefa from './tarefa';

@Entity({name: 'cliente'})
export default class Cliente {

    @PrimaryGeneratedColumn({type: 'int'})
    cli_id: number

    @Column({type: 'varchar', length: 40, nullable: false})
    cli_nome: string

    @Column({type: 'varchar', length: 80, nullable: false, unique: true})
    cli_email: string
    
    @Column({type: 'varchar', length: 15, nullable: false})
    cli_senha: string
    
    @OneToMany(() => Anotacao, anotacao => anotacao.cliente, {cascade: true})
    anotacao: Anotacao[]

    @ManyToMany(() => Tarefa, tarefa => tarefa.cliente)
    tarefa: Tarefa[]
}