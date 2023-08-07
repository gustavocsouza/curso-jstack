const user = {
  firstName: 'Gustavo',
  lastName: 'Cardoso',
  age: 23,
  instagram: '@gustavocsouza_',
  skills: ['Back-end', 'Front-end', 'Mobile', 'UI/UX']
};

const { firstName, lastName, skills, age: ageRename } = user;
const [ primary, secondary ] = skills;

console.log(firstName, lastName);
console.log(primary, secondary);
console.log(ageRename);