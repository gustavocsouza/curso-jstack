// Maior diferença é o contexto do objeto this

// tem o seu proprio this
function minhaFunction() {
  this.name = 'Gustavo';
  // tem o this do escopo onde foram criadas
  const minhaArrowFunction = () => {
    this.lastname = 'Cardoso';
  }

  minhaArrowFunction();
}

// console.log(new minhaFunction());

// arguments para arrow function vai puxar do escopo onde foi criado, como o this
// usar rest operator para receber quantidade de parametros de forma dinamica
const somaArrowFunction = (...restOperator) => {
  console.log(arguments); //arguments do pai
  console.log(restOperator);
}

function soma() {
  console.log(arguments); //arguments da funcao SOMA
}

somaArrowFunction(1,2,3,4,5);

const algumNumero = 10;
// short syntax arrow function
const returnSoma = () => (
  algumNumero > 5 
  ? 'maior' 
  : 'menor'
  );
console.log(returnSoma());

// para retornar diretamente o obj envolver com parenteses
const getUser = () => ({
  name: 'gustavo',
  lastname: 'cardoso'
});

console.log(getUser());


