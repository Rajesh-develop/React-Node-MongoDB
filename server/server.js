import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import  {connectDB} from "./configuration/database.js";
import userRoutes from "./routes/userRoutes.js"

const app = express();

dotenv.config()


// middlewares

app.use(cors())
app.use(express.json());



app.use("/api/users",userRoutes)

connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server running  on port:${PORT}`)
})



