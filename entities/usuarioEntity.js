

export default class UsuarioEntity {

    #nome;
    #email;

    get nome(){
        return this.#nome;
    }

    set nome(value){
        this.#nome = value;
    }

    get email(){
        return this.#email;
    }

    set email(value){
        this.#email = value;
    }

    constructor(nome, email){
        this.#nome = nome;
        this.#email = email;
    }

    toJSON(){
        return {
            nome: this.#nome,
            email: this.#email
        }
    }
}