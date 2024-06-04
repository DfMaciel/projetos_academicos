import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Cliente from './cliente';

@Entity({name: 'tarefa'})
export default class Tarefa {

    @PrimaryGeneratedColumn({type: 'int'})
    tarefa_id: number

    @Column({type: 'varchar', length: 40, nullable: false})
    tarefa_nome: string

    @Column({type: 'varchar', length: 400, nullable: false})
    tarefa_descricao: string

    @Column({type: 'datetime', nullable: false})
    tarefa_data: Date
    
    @ManyToMany(type => Cliente, cliente => cliente.tarefas)
    @JoinTable()
    clientes: Cliente[];
}