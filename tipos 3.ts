// string
let nomeM: string = 'João'
console.log(nome)
// nome = 28

// numbers
let idadeM: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbiesM: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdadeM: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'

// array
let hobbiesM: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbiesM = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas
let enderecoM: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

enderecoM = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco)

// enums
enum Cor {
    CinzaM, // 0
    VerdeM = 100, // 100
    Azulm = 10, // 2
    LaranjaM,
    AmareloM,
    VermelhoM = 100
}

let minhaCorM: Cor = Cor.VerdeM
console.log(minhaCor)

console.log(Cor.Azulm)
console.log(Cor.LaranjaM, Cor.AmareloM)
console.log(Cor.VerdeM, Cor.VermelhoM)

// any
let carroM: any = 'BMW'
console.log(carro)
carroM = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
function retornaMeuNome(): string {
    // return minhaIdade
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
    // return minhaIdade
}

digaOi()

function multiplicar(numA: any, numB: any): number {
    return numA * numB
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(4.7, 9))

// tipo função
let calculoM: (x: number, y: number) => number
// calculo = digaOi
// calculo()
// calculo = {}

calculoM = multiplicar
console.log(calculo(5, 6))

// objetos
let usuarioM: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)
// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 31,
    nome: 'Maria',
}
console.log(usuario)

// Desafio
/*
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos surpevisores
        - Função de bater ponto que recebe a hora (número)
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/
