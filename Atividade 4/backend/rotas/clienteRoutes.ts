import { Router } from "express";
import { CadastroCliente, LoginCliente } from "../controller/clienteController";

const router = Router();

router.post('/cadastro', CadastroCliente)
router.post('/login', LoginCliente)
export default router;