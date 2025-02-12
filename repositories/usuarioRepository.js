import UsuarioEntity from "../entities/usuarioEntity.js";

let listaBanco = [
    {
        colunaId: 1,
        colunaNome: "João Vitor",
        colunaEmail: "joaosoares.jv24@gmail.com"
    },
    {
        colunaId: 2,
        colunaNome: "Bruno Cavalheiro",
        colunaEmail: "bcavalheiro@gmail.com"
    }
];

export default class UsuarioRepository{

    listar() {
        let lista = [];
        for(let i=0; i<listaBanco.length ; i++){
            lista.push(new UsuarioEntity(
                listaBanco[i].colunaNome,
                listaBanco[i].colunaEmail
            ));

        }
        return lista;
    }

    cadastrar(entidade) {
        listaBanco.push({
            colunaEmail: entidade.email,
            colunaNome: entidade.nome
        })
    }
}