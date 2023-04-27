import mongoose, {Schema} from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    emailId: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    gender: {type: String, required: true},
    dob: {type: Date, required: true},
    address: {type: String, required: true},
    language: {type: Array},
    education: String

}, {collection: "user"})


export default userSchema