import * as adminDao from "../daos/AdminDao.js";


export const login = async (req, res) => {
    const user = req.body
    const loginRes = await adminDao.adminLogin(user.username, user.password)
    if (!loginRes) {
        res.sendStatus(401)
        return
    }
    res.json(loginRes)
}

export default (app) => {
    app.post('/admin/login', login)
}
