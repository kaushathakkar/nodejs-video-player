var Video = db.sequelize.define('video', {
  name: {
    type: db.Sequelize.STRING,
  },
  status: {
    type: db.Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    comment: "( 0 - Inactive | 1 - Active )"
  },
});
module.exports = Video;