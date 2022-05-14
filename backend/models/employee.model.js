const { DataTypes } = require('sequelize');
const sequelize = require('./dbmodel');

const Employee = sequelize.define('employees', {
    first_name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    last_name: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    designation_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

// UserType.hasMany(User, { as: 'users', foreignKey: 'user_type_id' });
// User.belongsTo(UserType, { as: 'user_type', foreignKey: 'user_type_id' });

module.exports = Employee;