require('dotenv').config();  // Carrega o arquivo .env.test para os testes

module.exports = {
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
};
