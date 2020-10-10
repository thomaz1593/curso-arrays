const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa foro do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // Remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// Adicionar uando splice
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// Remover usando o splice
pilotos.splice(3, 1, ) // Remove o Massa
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // Novo array
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)