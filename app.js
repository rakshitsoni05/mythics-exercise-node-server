import express from 'express';
import cors from 'cors'
import mongoose from "mongoose";
import UserController from "./controllers/UserController.js";
import AdminController from "./controllers/AdminController.js";


const CONNECTION_STRING = 'mongodb+srv://kanishkasoni1117:mythics@cluster0.suv8spm.mongodb.net/forms?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);


const app = express()
app.use(cors())
app.use(express.json());
UserController(app);
AdminController(app);
app.listen(4000)