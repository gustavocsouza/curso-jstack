const user = {
  firstName: 'Gustavo',
  lastName: 'Cardoso',
  age: 23,
  instagram: '@gustavocsouza_',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

// Rest(resto) operator -> salva o resto dos valores do objeto
// * Sempre precisa ser a ultima variavel na destruturação
const { firstName, skills, ...restoUser } = user;
const [ primary, ...restoSkills ] = skills;

console.log(firstName, primary);
console.log(restoUser);
console.log(restoSkills);