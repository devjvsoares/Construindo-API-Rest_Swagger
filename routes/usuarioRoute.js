import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();
let ctrl = new UsuarioController();
router.get("/", ctrl.listar);
router.post("/", ctrl.cadastrar);

export default router;