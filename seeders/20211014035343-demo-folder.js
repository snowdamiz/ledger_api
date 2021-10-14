'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Folder', [
      {
        title: 'Folder One',
        description: 'Folder one description',
        createdAt: '2016-08-09 04:05:02'
      },
      {
        title: 'Folder Two',
        description: 'Folder two description',
        createdAt: '2016-08-09 04:05:02'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Folder', null, {})
  }
};
