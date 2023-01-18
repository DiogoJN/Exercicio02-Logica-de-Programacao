/*
  Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

*/

const students = [
  {
    name: "Roberto",
    firstNote: 7,
    secondNote: 4.9
  },
  {
    name: "Márcia",
    firstNote: 9.4,
    secondNote: 8.2
  },
  {
    name: "Juliana",
    firstNote: 10,
    secondNote: 6.4
  }
]


function average (students) {
  averageFinal = (students.firstNote + students.secondNote)/2

  return `A media do(a) ${students.name} é de ${averageFinal}`
}

for(let student of students){
  let message = average(student)
  
  if(averageFinal < 7) {
    alert(`${message} Que pena você não passou, mas não desista tente na próxima vez.`)
  } else {
    alert(`${message} Parabens!! você pasou no concurso`)
  } 
}

