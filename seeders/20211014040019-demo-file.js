'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('File', [
      {
        title: 'File One',
        content: 'Folder one content',
        user_id: 1,
        folder_id: 1,
        createdAt: '2016-08-09 04:05:02'
      },
      {
        title: 'File Two',
        content: 'Folder two content',
        user_id: 1,
        folder_id: 1,
        createdAt: '2016-08-09 04:05:02'
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('File', null, {})
  }
};
