import express from 'express';
import routerUsuario from './routes/usuarioRoute.js';

const app = express();
app.use("/", routerUsuario);

app.listen(5000, () =>{
    console.log("Backend em execução!");
})