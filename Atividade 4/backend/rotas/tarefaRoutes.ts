import { Router } from "express";
import { BuscarUsuarios, CriarTarefa, BuscarTarefas } from "../controller/tarefaController";

const router = Router();

router.get('/verUsuarios', BuscarUsuarios)
router.post('/criarTarefa', CriarTarefa)
router.get('/verTarefas', BuscarTarefas)
export default router;