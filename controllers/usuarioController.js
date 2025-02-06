export default class UsuarioController{
    
    listar(req,res){
        let lista = [{nome: "João Vitor", idade: "20"}];
        //res.status(200).json({ lista });
        res.status(500).json({msg: "Erro!"});
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