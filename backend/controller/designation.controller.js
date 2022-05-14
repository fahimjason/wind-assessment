const Designation = require("../models/designation.model");
const { generateToken } = require('../utils');

async function getDesignations(req, res) {
    try {
        const designations = await Designation.findAll();

        res.status(200).send({ designations, token: generateToken('default-token') });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Internal server error!');
    }
}

async function getDesignation(req, res) {
    try {
        const { id } = req.params;

        const designation = await Designation.findOne({
            where: {
                id: id,
            }
        });

        if (!designation) return res.status(404).send('Designation not found!');

        const getChildren = async (designationId, result) => {


            const children = await Designation.findAll({
                where: {
                    parent_id: designationId,
                }
            });

            if (children?.length > 0) {
                children.map(async element => {
                    result.push(element.dataValues);
                    await getChildren(element.dataValues.id, result);
                });
            }
        }

        const result = [];
        await getChildren(id, result);

        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).send('Internal server error!');
    }
};

module.exports.getDesignations = getDesignations;
module.exports.getDesignation = getDesignation;