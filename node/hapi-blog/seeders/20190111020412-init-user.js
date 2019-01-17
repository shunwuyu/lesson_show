const timestamp = new Date();

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('user', [{
    id: 1,
    username: 'oliver',
    passwd: '02be052300bdd2390b1ba0776e43cbaa663aad44e751446c0f4d2d58fc7108ba',
    created_at: timestamp,
    updated_at: timestamp,
  }, {
    id: 2,
    username: 'troy',
    passwd: 'this-is-fake-encrypted-passwd',
    created_at: timestamp,
    updated_at: timestamp,
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('user', {
    id: { [Sequelize.Op.in]: [1, 2] },
  }, {}),
};