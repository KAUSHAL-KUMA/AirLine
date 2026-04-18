import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './db/database.js';
import airlineRouter from './routes/airline.route.js';


const app = express();
dotenv.config();
connectDB();

//app.get("/",(req,res) =>{
    //res.send('API WORKING....')
//})
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST","GET","PUT","DELETE"],
    credentials: true
}))
app.use(express.json())


app.use("/api/airline",airlineRouter)



const port = process.env.PORT || 4000;



app.listen(port,() =>{
    console.log(`server run at http://localhost${port}`)
})