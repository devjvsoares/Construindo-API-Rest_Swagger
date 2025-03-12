import express from 'express';
import routerUsuario from './routes/usuarioRoute.js';
import routerImovel from './routes/imovelRoute.js';
import routerAuth from './routes/autenticacaoRoute.js';
import swaggerUi from 'swagger-ui-express';
import {createRequire} from "module";
import { errorHandler, catchError } from './middlewares/exceptionMiddleware.js';
const require= createRequire(import.meta.url);
const outputJson = require('./swaggerOutPut.json');
const app = express();


app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(outputJson));
app.use("/", catchError(routerUsuario));
app.use("/", catchError(routerImovel));
app.use("/", catchError(routerAuth));

//sempre por último
app.use(errorHandler);

app.listen(5000, () =>{
    console.log("Backend em execução!");
})