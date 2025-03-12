import swaggerAutogen from "swagger-autogen";
import UsuarioEntity from "./entities/usuarioEntity.js";
import ImovelEntity from "./entities/imovelEntity.js";
import PerfilEntity from "./entities/perfilEntity.js";

const doc = {
    host: "localhost:5000",
    info:{
        title: "API REST",
        description: "API utlizando os padrões de REST na disciplina de Programação Full Stack"
    },
    components: {
        schemas: {
            imovel: new ImovelEntity(0, "Apartamento Beira Mar", "Rua dos Bobos, 0", "190720-38", "Bairro Um", "Presidente Prudente-SP", 1220.50, "S").toJSON(),
            usuario: new UsuarioEntity(0, "Fulano de Tal", "fulanodetal@gmail.com", "S", "abc123", new PerfilEntity(1, "Administrador")).toJSON()
        }
    }
}

const routes = ['./routes/usuarioRoute.js', './routes/imovelRoute.js', './routes/autenticacaoRoute.js']
const outputJson = './swaggerOutPut.json';

swaggerAutogen({openapi: '3.0.0'})(outputJson, routes, doc)
.then(async()=>{
    await import("./server.js")
})