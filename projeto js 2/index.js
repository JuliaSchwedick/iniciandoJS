import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"



const cliente1 = new Cliente ("Júlia", 11122233341);
const cliente2 = new Cliente ("Mi", 22233344401);
//cliente2.nome = "Mi";
//cliente2.cpf = 22233344401;
const contaCorrenteJúlia = new ContaCorrente(1001, cliente1);


contaCorrenteJúlia.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);



let valor = 200;
contaCorrenteJúlia.transferir(valor, conta2);


console.log(ContaCorrente.numeroDeContas)






