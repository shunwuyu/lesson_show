'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'users',
    [
      { id: 1, name: 'nameA', age: 18, ...timestamps },
      { id: 2, name: 'nameB', age: 20, ...timestamps },
    ],
    {}
  ),
  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
