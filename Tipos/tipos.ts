//string
let nome: string = 'Joao'
console.log(nome)

// nome = 28


//numbers
let idade: number = 27
// idade = 'Ana'

idade = 27.5
console.log(idade)


//boolena
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)

// minhaIdade = 'idade é 27'


//array
let hobbies: any[] = ["Cozinhar","Praticar Esportes"]
console.log(hobbies[0])
console.log(hobbies[1])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100

console.log(hobbies)


//tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Importante", 13, "Bloco C"]
console.log(endereco)


//Enums
enum Cor {
    Cinza,  //0
    Verde = 100,
    Azul = 10,
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)


console.log(Cor.Azul)
console.log(Cor.Laranja)
console.log(Cor.Amarelo)
console.log(Cor.Vermelho)


//any
let carro: any = "BMW"
console.log(carro)

carro = {marca: "BMW", ano: 2019}
console.log(carro)


//função
function retornaMeuNome(): string{
    return nome
    // return minhaIdade
}

console.log(retornaMeuNome())

function digaOi(): void{
    console.log('Oi')

    // return minhaIdade
}

digaOi()


function multiplicar(numA: number, numB: number): number{
    return numA * numB
}

// console.log(multiplicar(2,'Bia'))
console.log(multiplicar(4.7, 9 ))


//tipo função
let calculo : (numeroA: number, numberoB: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5,6))


// objetos
let usuario: {nome: string, idade: number} = {
    nome: 'Joao',
    idade: 27
}
console.log(usuario)


// usuario = {}


// usario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria'
}
console.log(usuario)


// EXERCÍCIO // MINHA SOLUÇÃO
let supervisores: string[] = ['Paulo', 'Marisa', 'Sandro']

function ponto(hora: number): string {
    if (hora <= 8)
        return 'Ponto Normal'
    else
        return 'Fora do Horário'
}

let myFuncionario: { super: string, horario: string} = {
    super: supervisores[2],
    horario: ponto(8.15)
}
console.log(myFuncionario)



//Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

// EXERCÍCIO // SOLUÇÃO INSTRUTOR
let funcionario: Funcionario = {
    supervisores : ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if (horario <= 8)
            return 'Ponto Normal'
        else
            return 'Fora do Horário..'
    }
}

let funcionario2: Funcionario = {
    supervisores : ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if (horario <= 8)
            return 'Ponto Normal'
        else
            return 'Fora do Horário..'
    }
}
console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))


// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)

nota = '10'
console.log(`Minha nota é ${nota}!`)


//Checando tipos
let valor = 30

if(typeof valor === "number"){
    console.log("É um valor number!")
}else{
    console.log(typeof valor)

}


//Type never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 8,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome...')
        }
        if(this.preco <= 0){
            falha('Preco inválido...')
        }
    }
}
produto.validarProduto()


// Type null
let altura = 12

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '985544744',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)


let podeSerNulo = null   //null é do tipo any
podeSerNulo = 12
console.log(podeSerNulo)

podeSerNulo = 'abc'
console.log(podeSerNulo)


//Desafio - EU
// let contaBancaria = {
//     saldo: 3456,
//     depositar (valor: number){
//         this.saldo+= valor
//     }
// }

// let correntista = {
//     nome: 'Ana Silva',
//     contaBancaria: contaBancaria,
//     contatos: ['34567890','98765432']
// }

// correntista.contaBancaria.depositar(3000)
// console.log(correntista)


//CORREÇÃO DO DESAFIO
type contaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: contaBancaria = {
    saldo: 3456,
    depositar (valor: number){
        this.saldo+= valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: contaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890','98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)