import * as userDao from "../daos/UserDao.js";


const createUserInfo = async (req, res) => {
    const user = req.body;
    const userRes = await userDao.createUserInfo(user);
    res.json(userRes)
}

const getAllInfo = async (req, res) => {
    const info = await userDao.getAllUsers()
    res.json(info)
}


export default (app) => {
    app.post('/userInfo',createUserInfo);
    app.get('/getAllInfo', getAllInfo)
};