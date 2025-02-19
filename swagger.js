import swaggerAutogen from "swagger-autogen";

const doc = {
    host: "localhost:5000",
    info:{
        title: "API REST",
        description: "API utlizando os padrões de REST na disciplina de Programação Full Stack"
    }
}

const routes = ['./routes/usuarioRoute.js']
const outputJson = './swaggerOutPut.json';

swaggerAutogen({openapi: '3.0.0'})(outputJson, routes, doc)
.then(async()=>{
    await import("./server.js")
})