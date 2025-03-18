const mainModel = require('../model/model')
const db = require('../../config/config');

module.exports = {
    async getUser(req, res) {
        try {
            const [result] = await db.query(`SELECT * FROM TBL_User WHERE Username = '${req.body.Username}'`)
            console.log(result);
            res.status(200).send(result);
        }
        catch (error) {
            console.log(error);
            res.send(error);
        }
    }
}