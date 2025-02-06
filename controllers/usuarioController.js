export default class UsuarioController{
    
    listar(req,res){
        try{
            let lista = [{nome: "João Vitor", idade: "20"}];
            //res.status(200).json({ lista }); //requisição 200 = para retornar acertos/tudo certo
            res.status(500).json({msg: "Erro!"}); //requisição 500 = para retornar erros
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