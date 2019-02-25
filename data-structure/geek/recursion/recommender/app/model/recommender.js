module.exports = app => {
  const { INTEGER} = app.Sequelize;
  const Recommender = app.model.define('recommender', {
    userId: { type: INTEGER },
    recId: { type: INTEGER }
  }, {
    freezeTableName: true
  })
  return Recommender;
};