import express from 'express';
import UsuarioController from '../controllers/usuarioController.js';
import AuthMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();
let ctrl = new UsuarioController();
let authMiddleware = new AuthMiddleware();
router.get("/usuarios", authMiddleware.validar, (req, res) =>{
    // #swagger.tags = ["Usuários"]
    // #swagger.summary = "Endpoint para listar todos os usuários do banco de dados"
    ctrl.listar(req,res);
});
router.post("/usuarios", (req,res) => {
    // #swagger.tags = ["Usuários"]
    // #swagger.summary = "Cadastra um usuário no banco de dados"
    /* #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/usuario"
                    }
            }
        }
    } 
    */
    ctrl.cadastrar(req,res);
});
router.put("/usuarios", (req,res) => {
    // #swagger.tags = ["Usuários"]
    // #swagger.summary = "Atualiza um usuário especificado através de um parâmetro"
    /* #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/usuario"
                    }
            }
        }
    } 
    */
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