import PerfilEntity from "../entities/perfilEntity.js";
import UsuarioEntity from "../entities/usuarioEntity.js";
import UsuarioRepository from "../repositories/usuarioRepository.js";

export default class UsuarioController {

    #repo;

    constructor() {
        this.#repo = new UsuarioRepository();
    }

    async listar(req, res) {
        let lista = await this.#repo.listar();
        res.status(200).json({ lista }); //requisição 200 = para retornar acertos/tudo certo
    }

    async cadastrar(req, res) {
        if (req.body) {
            let { nome, email, ativo, senha, perfil } = req.body;
            if (nome && email && ativo && senha && perfil.id > 0) {
                let entidade = new UsuarioEntity(0, nome, email, ativo, senha, new PerfilEntity(perfil.id));
                if(await this.#repo.cadastrar(entidade))
                    return res.status(201).json({ msg: "Usuário Cadastrado!" });
                else
                    throw new Error("Erro ao inserir Usuário no banco de dados!");
            }
            else
                res.status(400).json({ msg: "O corpo da requisição não está adequado!" });
        }
        else {
            res.status(400).json({ msg: "Parametros Inválidos!" });
        }
    }

    async obter(req, res) {
        let { codigo } = req.params;
        var lista = await this.#repo.obter(codigo);
        if (lista.length == 0)
            return res.status(404).json({ msg: "Id não encontrado!" });
        return res.status(200).json(lista);
    }

    async alterar(req, res) {
        let entidade = new UsuarioEntity();
        let { id, nome, email, ativo, senha, perfil } = req.body;
        if (id > 0 && nome && email && ativo && senha && perfil.id > 0) {
            entidade.id = id;
            entidade.nome = nome;
            entidade.email = email;
            entidade.ativo = ativo;
            entidade.senha = senha;
            entidade.perfil = perfil;
            if(await this.#repo.alterar(entidade))
                return res.status(200).json({ msg: "Usuário alterado!" });
            else
            throw new Error("Erro ao alterar usuário no banco de dados!")
        }
        else {
            return res.status(400).json({ msg: "Parâmetros inválidos!" });
        }
    }

    async excluir(req, res) {
        let { codigo } = req.params;
        if(await this.#repo.excluir(codigo))
            return res.status(200).json({ msg: "Usuário excluído com sucesso!" });
        else
            throw new Error("Erro ao deletar usuário do banco de dados!");
    }

}