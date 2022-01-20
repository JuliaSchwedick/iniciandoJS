export class Cliente {
    nome;
    _cpf;

    get cpf(){ //para não alterar o cpf. só alterar em outros clientes, para isso, usar os construtores
     return this._cpf;
    
    }
    
    constructor(nome, cpf){ //dessa maneira não é possivel alterar esses dados
        this.nome = nome;
        this._cpf = cpf;


    }
}