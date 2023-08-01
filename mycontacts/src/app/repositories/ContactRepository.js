const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Gustavo',
    email: 'gustavo@email.com',
    phone: '999999999',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
