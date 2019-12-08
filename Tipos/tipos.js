"use strict";
//string
var nome = 'Joao';
console.log(nome);
// nome = 28
//numbers
var idade = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
//boolena
var possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
//array
var hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);
//tuplas
var endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 13, "Bloco C"];
console.log(endereco);
//Enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja);
console.log(Cor.Amarelo);
console.log(Cor.Vermelho);
//any
var carro = "BMW";
console.log(carro);
carro = { marca: "BMW", ano: 2019 };
console.log(carro);
//função
function retornaMeuNome() {
    return nome;
    // return minhaIdade
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    // return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2,'Bia'))
console.log(multiplicar(4.7, 9));
//tipo função
var calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
var usuario = {
    nome: 'Joao',
    idade: 27
};
console.log(usuario);
// usuario = {}
// usario = {
//     name: 'Maria',
//     age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
// EXERCÍCIO // MINHA SOLUÇÃO
var supervisores = ['Paulo', 'Marisa', 'Sandro'];
function ponto(hora) {
    if (hora <= 8)
        return 'Ponto Normal';
    else
        return 'Fora do Horário';
}
var myFuncionario = {
    super: supervisores[2],
    horario: ponto(8.15)
};
console.log(myFuncionario);
// EXERCÍCIO // SOLUÇÃO INSTRUTOR
var funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: function (horario) {
        if (horario <= 8)
            return 'Ponto Normal';
        else
            return 'Fora do Horário..';
    }
};
var funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto: function (horario) {
        if (horario <= 8)
            return 'Ponto Normal';
        else
            return 'Fora do Horário..';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
// Union Types
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
nota = '10';
console.log("Minha nota \u00E9 " + nota + "!");
//Checando tipos
var valor = 30;
if (typeof valor === "number") {
    console.log("É um valor number!");
}
else {
    console.log(typeof valor);
}
//Type never
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome...');
        }
        if (this.preco <= 0) {
            falha('Preco inválido...');
        }
    }
};
produto.validarProduto();
// Type null
var altura = 12;
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '985544744',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var podeSerNulo = null; //null é do tipo any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = 'abc';
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3456,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
