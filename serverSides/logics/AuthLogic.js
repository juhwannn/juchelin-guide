console.log(`${__filename}:1`);

const {models: {Employee}} = require('./SequelizeLogic');
const shares = require('../../shares');
const BcryptLogic = require("./BcryptLogic");

module.exports = {
    login: async (id, password) => {
        const employee = await Employee.findOne({
            where: {
                id
            }
        });
        if (!employee) {
            return null;
        }

        const checkPassword = await BcryptLogic.compare(password, employee.password);
        if (!checkPassword) {
            return null;
        }

        if (employee.state !== shares.Employee.stateNormal && employee.state !== shares.Employee.stateIntern) {
            return null;
        }

        // noinspection UnnecessaryLocalVariableJS
        return employee;
    }
};