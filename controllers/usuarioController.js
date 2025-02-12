export default class UsuarioController{
    
    listar(req,res){
        try{
            let usuario = UsuarioController();
            let lista = usuario.listar();
            res.status(200).json({lista}); //requisição 200 = para retornar acertos/tudo certo
        }
        catch(ex){
            res.status(500).json({msg: ex.message});
        }
    }

    obter(req,res){

    }

    cadastrar(req,res){

    }

    alterar(req,res){

    }

    excluir(req,res){

    }

}