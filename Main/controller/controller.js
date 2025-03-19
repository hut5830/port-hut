const mainModel = require('../model/model')
const db = require('../../config/config');

module.exports = {
    async getUser(req, res) {
        try {
            const [result] = await db.query(`
                SELECT * FROM TBL_User WHERE Username = '${req.body.Username}'
                `)
            console.log(result);
            res.status(200).send(result);
        }
        catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    async getMyselfProgram(req, res) {
        try {
            let where_col = '';
            const { body } = req

            if (body.PinCode) {
                where_col = `AND tu.PinCode = '${body.PinCode}'`
            }

            const [result] = await db.query(`
                SELECT ROW_NUMBER() OVER(ORDER BY tp.ID_Auto ASC)as row_num,
                    tp.ID_Auto , tup.ID_AutoUser , tu.ID_Auto AS ID_AutoUser ,
                    tp.Program_Name ,tp.Program_Description 
                    FROM mydb.TBL_User_Programs tup
                INNER JOIN mydb.TBL_User tu ON tu.ID_Auto = tup.ID_AutoUser 
                LEFT JOIN mydb.TBL_Programs tp ON tup.ID_AutoProgram = tp.ID_Auto 
                WHERE 1=1 ${where_col}
                `)
            console.log(result);
            res.status(200).send(result);
        }
        catch (error) {
            console.log(error);
            res.send(error);
        }
    },
    async getMyselfDetail(req, res) {
        try {
            let where_col = '';
            const { body } = req

            if (body.PinCode) {
                where_col = `AND tu.PinCode = '${body.PinCode}'`
            }

            const [result] = await db.query(`
                SELECT ROW_NUMBER() OVER(ORDER BY tud.ID_Auto ASC)as row_num,
                    tu.ID_Auto ,tp.ID_Auto ,tp.Program_Name ,
                    tud.User_Detail ,tud.User_Description ,
                    tu.Firstname ,tu.Lastname ,tu.Nickname 
                    FROM mydb.TBL_User_Detail tud 
                INNER JOIN mydb.TBL_User tu ON tud.ID_AutoUser = tu.ID_Auto 
                LEFT JOIN mydb.TBL_Programs tp ON tud.ID_AutoProgram  = tp.ID_Auto 
                WHERE 1=1 ${where_col}
                `)
            console.log(result);
            res.status(200).send(result);
        }
        catch (error) {
            console.log(error);
            res.send(error);
        }
    },
}