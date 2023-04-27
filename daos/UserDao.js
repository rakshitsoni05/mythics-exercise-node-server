import userModel from "../mongoose/user/UserModel.js";


export const createUserInfo = (user) => userModel.create(user);

export const getAllUsers = () => userModel.find()