import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();
let ctrl = new UsuarioController();
router.get("/usuarios", ctrl.listar);

export default router;