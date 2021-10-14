'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [
      {
        email: 'bob@gmail.com',
        password: 'test',
        createdAt: '2016-08-09 04:05:02'
      },
      {
        email: 'sam@gmail.com',
        password: 'test2',
        createdAt: '2016-08-09 04:05:02'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('User', null, {})
  }
};
