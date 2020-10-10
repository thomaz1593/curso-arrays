const alunos = [{
        nome: 'João',
        nota: 7.9
    },
    {
        nome: 'Maria',
        nota: 9.2
    }
]

// Imperativo -> É como um passa a passo de como fazer uma ação
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo -> Se preocupa mais com o resultado final do que com o como é feito a ação
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)