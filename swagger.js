import swaggerAutogen from "swagger-autogen";

const doc = {
    host: "localhost:5000",
    info:{
        title: "API REST",
        description: "API utlizando os padrões de REST na disciplina de Programação Full Stack"
    }
}

const routes = ['./server.js']
const outputJson = './swaggerOutPut.json';