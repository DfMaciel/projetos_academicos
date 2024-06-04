import { Router } from "express";
import { VerAnotacao, CriarAnotacao } from "../controller/anotacaoController";

const router = Router();

router.get('/verAnotacao', VerAnotacao)
router.post('/criarAnotacao', CriarAnotacao)
export default router;