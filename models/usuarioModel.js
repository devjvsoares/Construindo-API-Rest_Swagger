let usuarios=[{
  nome: "João Vitor",
  idade: 20      
}]

export default class UsuarioModel{
    #nome;
    #idade;

    listar(){
        return usuarios;
    }
}