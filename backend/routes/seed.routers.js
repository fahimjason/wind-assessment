const express = require('express');
const data = require('../data');
const sequelize = require('../models/dbmodel');
const Employee = require('../models/employee.model');
const Designation = require('../models/designation.model');

const router = express.Router();;

router.get('/api/seed', async (req, res) => {
    await sequelize.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
    await sequelize.sync();

    await Employee.destroy({ truncate: { cascade: true } });
    const createEmployees = await Employee.bulkCreate(data.employees);

    await Designation.destroy({ truncate: { cascade: true } });
    const createDesignations = await Designation.bulkCreate(data.designations);

    res.send({ createDesignations, createEmployees });
});

module.exports = router;