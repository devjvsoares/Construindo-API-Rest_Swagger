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

    cadastrar(req,res){
        try{
            if(req.body){
                let {nome, email} = req.body;
                if(nome && email){
                    let entidade = new UsuarioEntity(new Date().getTime(),nome, email);
                    let repo = new UsuarioRepository();
                    repo.cadastrar(entidade);
                    return res.status(201).json({msg: "Usuário Cadastrado!"});
                }
                else
                    res.status(400).json({msg: "O corpo da requisição não está adequado!"});
            }
            else{
                res.status(400).json({msg: "Parametros Inválidos!"});
            }

        }
        catch(ex){
           return res.status(500).json({msg: ex.message});
        }
    }

    obter(req,res){
        try{
            let {codigo} = req.params;
            let repo = new UsuarioRepository();
            var lista = repo.obter(codigo);
            if(lista.length == 0)
                return res.status(404).json({msg: "Id não encontrado!"});
            return res.status(200).json(lista);
        }
        catch(ex){
            return res.status(500).json({msg: ex.message});
        }
    }

    alterar(req,res){
        try{
            let entidade = new UsuarioEntity();
            let {id, nome, email} = req.body;
            if(id && nome && email){
                entidade.id = id;
                entidade.nome = nome;
                entidade.email = email;
                let repo = new UsuarioRepository();
                repo.alterar(entidade);
                return res.status(200).json({msg: "Usuário alterado!"});
            }
            else{
                return res.status(400).json({msg: "Parâmetros inválidos!"});
            }
        }
        catch(ex){
            return res.status(500).json({msg: ex.message});
        }
    }

    excluir(req,res){
        try{
            let {codigo} = req.params;
            let repo = new UsuarioRepository();
            repo.excluir(codigo);
            return res.status(200).json({msg: "Usuário excluído com sucesso!"});
        }
        catch(ex){
            return res.status(500).json({msg: ex.message});
        }
    }

}