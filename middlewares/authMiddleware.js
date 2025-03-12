import jwt from 'jsonwebtoken'
const SECRET = "JO&O@@VI$"

export default class AuthMiddleware{

    gerarToken( id,nome,email,perfilId){
        return jwt.sign({
            id: id,
            nome: nome,
            email: email,
            perfilId:perfilId
        }, SECRET, { expiresIn: 360 })
    }

    validar(req, res, next){
        let token = req.headers.auth
        if(token){
            let usuarioToken = jwt.verify(token, SECRET);
            next();
        }
        else{
            res.status(401).json({msg: "Não autorizado!"})
        }
    }
}