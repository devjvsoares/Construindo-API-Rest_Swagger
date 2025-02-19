import UsuarioEntity from "../entities/usuarioEntity.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";

export default class UsuarioController {

    #repo;

    constructor() {
        this.#repo = new UsuarioRepository();
    }

    listar(req, res) {
        let lista = this.#repo.listar();
        res.status(200).json({ lista }); //requisição 200 = para retornar acertos/tudo certo
    }

    cadastrar(req, res) {
        if (req.body) {
            let { nome, email } = req.body;
            if (nome && email) {
                let entidade = new UsuarioEntity(new Date().getTime(), nome, email);
                this.#repo.cadastrar(entidade);
                return res.status(201).json({ msg: "Usuário Cadastrado!" });
            }
            else
                res.status(400).json({ msg: "O corpo da requisição não está adequado!" });
        }
        else {
            res.status(400).json({ msg: "Parametros Inválidos!" });
        }
    }

    obter(req, res) {
        let { codigo } = req.params;
        var lista = this.#repo.obter(codigo);
        if (lista.length == 0)
            return res.status(404).json({ msg: "Id não encontrado!" });
        return res.status(200).json(lista);
    }

    alterar(req, res) {
        let entidade = new UsuarioEntity();
        let { id, nome, email } = req.body;
        if (id && nome && email) {
            entidade.id = id;
            entidade.nome = nome;
            entidade.email = email;
            this.#repo.alterar(entidade);
            return res.status(200).json({ msg: "Usuário alterado!" });
        }
        else {
            return res.status(400).json({ msg: "Parâmetros inválidos!" });
        }
    }

    excluir(req, res) {
        let { codigo } = req.params;
        this.#repo.excluir(codigo);
        return res.status(200).json({ msg: "Usuário excluído com sucesso!" });
    }

}