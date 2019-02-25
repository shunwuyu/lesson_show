'use strict';

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'recommender',
    [
      { userId: 1, recId: 0 },
      { userId: 2, recId: 1 },
      { userId: 3, recId: 2 },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    // 删除 shop 表 id 为 1，2，3，4 的记录
    return queryInterface.bulkDelete('recommender', { userId: { [Op.in]: [1, 2, 3] } }, {});
  },
};
