'use strict';

module.exports = {
  up: (queryInterface, Sequlize) => queryInterface.createTable(
    'goods',
    {
      id: {
        type: Sequlize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      shop_id: {
        type: Sequlize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequlize.STRING,
        allowNull: false
      },
      thumb_url: Sequlize.STRING,
      created_at: Sequlize.DATE,
      updated_at: Sequlize.DATE,
    },
  ),
  down: queryInterface => queryInterface.dropTable('goods'),
}