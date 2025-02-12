import UsuarioEntity from "../entities/usuarioEntity.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";

export default class UsuarioController{
    
    listar(req,res){
        try{
            let usuario =new UsuarioRepository();
            let lista = usuario.listar();
            res.status(200).json({lista}); //requisição 200 = para retornar acertos/tudo certo
        }
        catch(ex){
            return res.status(500).json({msg: ex.message});
        }
    }

    obter(req,res){

    }

    cadastrar(req,res){
        try{
            if(req.body){
                let {nome, email} = req.body;
                let entidade = new UsuarioEntity(nome, email);
                let repo = new UsuarioRepository();
                repo.cadastrar(entidade);
                return res.status(201).json({msg: "Usuário Cadastrado!"});
            }else{
                res.status(400).json({msg: "Parametros Inválidos!"});
            }

        }
        catch(ex){
           return res.status(500).json({msg: ex.message});
        }
    }

    alterar(req,res){

    }

    excluir(req,res){

    }

}