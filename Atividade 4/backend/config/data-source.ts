import "reflect-metadata"
import { DataSource } from "typeorm"
import Cliente from "../entities/cliente"
import Anotacao from "../entities/anotacao";
import Tarefa from "../entities/tarefa";

export const Connection = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "lista04",
    synchronize: true,
    logging: false,
    entities: [Cliente, Anotacao, Tarefa],
});