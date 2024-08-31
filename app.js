require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const authuser = require('./routes/user');
const authstore = require('./routes/store');
const verifyjwt = require('./middlewares/verifyjwt');
app.use(express.json());


app.get('/',(req,res)=>{
    res.send('hello world');
})

app.use('/api/user' , authuser);
app.use('/api/store', verifyjwt , authstore);





const port = 3000;
const start = async ()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log(`server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}
start();