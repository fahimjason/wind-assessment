const { DataTypes } = require('sequelize');
const sequelize = require('./dbmodel');

const Designation = sequelize.define('designations', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parent_id: {
        type: DataTypes.INTEGER || 0,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

module.exports = Designation;