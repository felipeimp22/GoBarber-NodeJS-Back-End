module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true, // ensures that you have a "created at and updated at" column within each table within the database
    underscored: true,
    underscoredAll: true, // ensures that the sequelize has table and column nameclatura patterns through the underscor pattern
  },
};
