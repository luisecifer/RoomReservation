module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    name: DataTypes.STRING,
    phonenumber: DataTypes.INTEGER,
    roomId: DataTypes.STRING,
    date: DataTypes.TEXT
  })
  return Reservation
}
