const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactRepository.findAll();
    response.json(contacts);
  }

  show() {
    // Obter um registro
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
