const UserController = require('./constrollers/UserController');

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers
  }
];