import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();
let ctrl = new UsuarioController();
router.get("/", ctrl.listar);
router.post("/", ctrl.cadastrar);
router.delete("/:codigo", ctrl.excluir);
router.get("/:codigo", ctrl.obter);
router.put("/:codigo", ctrl.alterar);

export default router;