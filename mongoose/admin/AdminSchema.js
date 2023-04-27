import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    username : String,
    password : String
}, {collection: "admin"})

export default adminSchema