import express from "express";
import{PORT, mongoDBURL} from "./config.js";

const app = express();

app.get('/', (req,res)=> {
console.log(req);
return res.status(234).send('Welcome To MERN Stack Tutorial')
})

app.listen(PORT, ()=> {
    console.log(`App is listening to port: ${PORT}`);
})