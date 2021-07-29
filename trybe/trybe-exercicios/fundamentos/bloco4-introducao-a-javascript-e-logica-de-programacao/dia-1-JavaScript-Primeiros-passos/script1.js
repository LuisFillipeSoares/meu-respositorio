let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';


console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);
console.log(typeof patientAge);

patientId = '50';
console.log(typeof patientId);

let base = 5;
let altura = 5;
let area = base * altura;
console.log(area);

let perimetro = 10 * 3;
console.log(perimetro);


let notaPessoaCandidata = 0; 

if (notaPessoaCandidata >= 0 && notaPessoaCandidata <= 100) {
  if (notaPessoaCandidata >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
  } 
  else if (notaPessoaCandidata >= 60) {
    console.log("Você está na nossa lista de espera")
  } 
  else {
    console.log("Você foi reprovada(o)")
  }
} else {
  console.log("Nota inválida")
}


let estadoCandidato;

switch (estadoCandidato) {
  case 'aprovada':
    console.log('aprovada');
    break;
  case 'lista':
    console.log('aprovada');
    break;
  case 'reprovada':
    console.log('reprovada')
    break;
  default:
    console.log('Não se aplica')
}

