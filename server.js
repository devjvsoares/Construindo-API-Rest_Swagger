import express from 'express';
import routerUsuario from './routes/usuarioRoute.js';
const app = express();


app.use(express.json());
app.use("/usuarios", routerUsuario);

app.listen(5000, () =>{
    console.log("Backend em execução!");
})