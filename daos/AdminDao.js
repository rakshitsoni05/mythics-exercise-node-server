import adminModel from "../mongoose/admin/AdminModel.js";

export const adminLogin = (username, password) => adminModel.findOne(
    {username, password},
    {password: false}
);