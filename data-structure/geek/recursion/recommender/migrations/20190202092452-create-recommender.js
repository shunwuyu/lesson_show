'use strict';

module.exports = {
  up: async(queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('recommender', {
      userId: {type: INTEGER },
      recId: {type: INTEGER }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('recommender');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
