import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import Cliente from './cliente';

@Entity({name: 'tarefa'})
export default class Tarefa {

    @PrimaryGeneratedColumn({type: 'int'})
    tarefa_id: number

    @Column({type: 'varchar', length: 40, nullable: false})
    tarefa_nome: string

    @Column({type: 'varchar', length: 400, nullable: false})
    tarefa_descricao: string
    
    @ManyToMany(() => Cliente, cliente => cliente.tarefa)
    cliente: Cliente[]
}