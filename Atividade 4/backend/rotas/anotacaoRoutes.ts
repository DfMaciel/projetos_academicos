import { Router } from "express";
import { VerAnotacao, CriarAnotacao } from "../controller/anotacaoController";

const router = Router();

router.get('/verAnotacao', VerAnotacao)
router.get('/criarAnotacao', CriarAnotacao)
export default router;