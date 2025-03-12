import express from 'express';
import ImovelController from '../controllers/imovelController.js';


const router = express.Router();
let ctrl = new ImovelController();

router.get("/imovel", (req, res) =>{
    // #swagger.tags = ["Imóveis"]
    // #swagger.summary = "Endpoint para listar todos os imóveis do banco de dados"
    ctrl.listar(req,res);
})

router.get("/imovel/:id", (req, res) =>{
    // #swagger.tags = ["Imóveis"]
    // #swagger.summary = "Endpoint para obter um imóvel do banco de dados"
    ctrl.obter(req,res);
})

router.post("/imovel", (req, res) =>{
    // #swagger.tags = ["Imóveis"]
    // #swagger.summary = "Endpoint para cadastrar imóveis no banco de dados"
    /* #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/imovel"
                    }
            }
        }
    } 
    */
    ctrl.cadastrar(req,res);
})

router.put("/imovel", (req, res) =>{
    // #swagger.tags = ["Imóveis"]
    // #swagger.summary = "Endpoint para alterar todos os imóveis do banco de dados"
    /* #swagger.requestBody = {
        required: true,
        content: {
            "application/json": {
                schema: {
                    $ref: "#/components/schemas/imovel"
                    }
            }
        }
    } 
    */
    ctrl.alterar(req,res);
})

router.delete("/imovel/:id", (req, res) =>{
    // #swagger.tags = ["Imóveis"]
    // #swagger.summary = "Endpoint para excluir todos os imóveis do banco de dados"
    ctrl.deletar(req,res);
})

export default router;