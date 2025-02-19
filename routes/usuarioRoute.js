import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';

const router = express.Router();
let ctrl = new UsuarioController();
router.get("/usuarios", (req, res) =>{
    // #swagger.tags = ["Usuários"]
    // #swagger.summary = "Endpoint para listar todos os usuários do banco de dados"
    ctrl.listar(req,res);
});
router.post("/usuarios", (req,res) => {
    // #swagger.tags = ["Usuários"]
    // #swagger.summary = "Cadastra um usuário no banco de dados"
    ctrl.cadastrar(req,res);
});
router.put("/usuarios", (req,res) => {
    // #swagger.tags = ["Usuários"]
    // #swagger.summary = "Atualiza um usuário especificado através de um parâmetro"
    ctrl.alterar(req,res);
});
router.delete("/usuarios/:codigo", (req,res) => {
    // #swagger.tags = ["Usuários"]
    // #swagger.summary = "Exclui um usuário especificado através de um parametro no banco de dados"
    ctrl.excluir(req,res);
});
router.get("/usuarios/:codigo", (req,res) => {
    // #swagger.tags = ["Usuários"]
    // #swagger.summary = "Retorna um usuário especificado através de um parâmetro"
    ctrl.obter(req,res);
});


export default router;