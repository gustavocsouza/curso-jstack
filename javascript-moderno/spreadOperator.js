const user = {
  firstName: 'Gustavo',
  lastName: 'Cardoso',
  age: 23,
  instagram: '@gustavocsouza_',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX'],
  active: false,
};

// Spread(espalhar) operator
// Principio de imutabilidade -> Nunca mudar um objeto diretamente, criar um novo objeto com as novas informações
const updatedUser = {
  ...user,
  skills: [...user.skills, 'Marketing'], // é possivel usar o spread em arrays
  active: true
};

console.log(updatedUser)