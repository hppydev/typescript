// let & const
var seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if(estaFrio) {
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

const cpf: string = '123.456.000-99'
// cpf = '789.101.132-78'
console.log(cpf)

var segredo = "externo!"
function revelar() {
    const segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)

{
    {
        const def = 'def'
        console.log(def)
    }
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}
// console.log(i)

// Arrow Function
function somar(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2, 2))

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log("Olá!")
saudacao()

const falarCom = (pessoa: string) => console.log('Ola ' + pessoa)
falarCom('João')

// this

// function normalComThis() {
//     console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis
//     .bind({ nome: 'Ana' })
// normalComThisEspecial()

// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
// arrowComThisEspecial()

// Parâmetros padrão
function contagemRegressiva(inicio: number = 5,
    fim: number = inicio -5): void {
    console.log(inicio)
    while(inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log("Fim!")
}

contagemRegressiva()
contagemRegressiva(5)

// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = 
    ['Fernando', ...turmaA, 'Miguel', 'Lorena']
console.log(turmaB)

function retornarArray(...args: number[]): number[] {
    return args
}

const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623)
console.log(numeros)
console.log(retornarArray(...numbers))

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
    // console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destructuring (objeto)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const { nome:n, preco: p, caracteristicas: { w } } = item
console.log(n)
console.log(p)
console.log(w)

const usuarioID: string = 'SuporteCod3r'
const notificacoes: string = '19'
// const boasVindas = 'Boas vindas ' + usuarioID + 
//      'Notificações: ' + notificacoes
const boasVindas = `
Boas vindas ${usuarioID},
Notificações: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`
console.log(boasVindas)
console.log(`${(1+1) * 30}`)
console.log(`Motor: ${caracteristicas[0]}`)

// Desafios
// Exercicio 1
// var dobro = function(value: any) {
//     return value * 2
// }
// console.log(dobro(10))

let dobro2 = (num: number): number => num * 2
console.log(dobro2(10));


// Exercicio 2
// var dizerOla = function (nome: any) {
//     if (nome === undefined) { nome = 'Pessoa' }
//     console.log('Olá, ' + nome)
// }

// dizerOla('Anna')

let complimentt = (call: any) => {
    if(call === undefined) {
        call = 'Pessoa'
        let saudou = `Olá, ${call}`;
        return saudou
    }
}

const dizerOla = function(nome:string = 'Pessoa'): void {
    console.log('Olá,' + nome );
}
//console.log(compliment('Gisele'));
 
// Exercicio 3
//let nums: number = [-3, 33, 38, 5]
// Imprimir o menor valor
//let minNum = Math.min(...nums)
//console.log(minNum) //-3

// Exercicio 4
let array: number[] = [55, 20]
let nums: number[] = [-3, 33, 38, 5]
// Adicionar todos os elementos de "nums" em array
array = [55, 20,...nums]
console.log(array) //[ 55, 20, -3, 33, 38, 5 ]

// Exercicio 5
 let notas = [8.5, 6.3, 9.4]
const [notaA, notaB, notaC] = notas
console.log(notaA, notaB, notaC)

// Exercicio 6
let cientista = { 
    primeiroNome: 'Will', 
    expeciencia: 12 
}

// let primeiroNome = cientista.primeiroNome
// let expeciencia = cientista.expeciencia

const { primeiroNome: pN, expeciencia: exp } = cientista
console.log(pN)
console.log(exp);


