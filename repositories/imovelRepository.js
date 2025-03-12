import Database from "../db/database.js";


export default class ImovelRepository{

    #banco;

    constructor(){
        this.#banco = new Database();
    }

    async listar(){

        let sql = 'select *from tb_imovel';

        let rows = await this.#banco.ExecutaComando(sql);
        let lista = [];
        for(let i=0; i<rows.length;i++){
            let row = rows[i];
            lista.push(new ImovelEntity(row["Imv_id"], row["imv_descricao"], row["imv_endereco"], row["imv_cep"], row["imv_bairro"], row["cidade"], row["valor"], row["imv_disponivel"]));
        }
    }

    async obter(){

        let sql = 'select *from tb_imovel where imv_id = ?';
        let valores = [id];

        let rows = await this.#banco.ExecutaComando(sql, valores);
        let lista = [];
        for(let i=0; i<rows.length;i++){
            let row = rows[i];
        lista.push(new ImovelEntity(row["imv_id"], row["imv_descricao"], row["imv_endereco"], row["imv_cep"], row["imv_bairro"], row["imv_cidade"], row["imv_valor"], row["imv_disponivel"]))
        }
    }

    async cadastrar (entidade){

        let sql = `insert into tb_imovel (imv_,descricao, imv_endereco, imv_cep, imv_bairro, imv_cidade, imv_valor, imv_disponivel)`

        let valores = [entidade.descricao, entidade.endereco, entidade.cep, entidade.bairro, entidade.cidade, entidade.valor, entidade.disponivel];

        let result = await this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async alterar (entidade){

        let sql = `update tb_imovel set imv_,descricao=?,
                                        imv_endereco=?,
                                        imv_cep=?,
                                        imv_bairro=?,
                                        imv_cidade=?,
                                        imv_valor=?,
                                        imv_disponivel=?
                                        where imv_id = ?)`

        let valores = [entidade.descricao, entidade.endereco, entidade.cep, entidade.bairro, entidade.cidade, entidade.valor, entidade.disponivel, entidade.id];

        let result = await this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }

    async deletar(id){
        let sql = 'delete from tb_imovel where imv_id=?'
        let valores = [id];

        let result = await this.#banco.ExecutaComandoNonQuery(sql, valores);

        return result;
    }
}