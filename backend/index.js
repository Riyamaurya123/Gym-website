import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import { sendEmail } from './utils/sendEmail.js';

const app = express();
const router = express.Router();
config({ path: './config.env' });

app.use(cors({
  origin: "https://gym-website-frontend-three.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
}));

app.options("*", cors()); 

app.use(express.json())
app.use(express.urlencoded({extended: true}))

router.post("/send/mail", async(req,res,next)=>{
    const {name, email, message} = req.body
    if(!name || !email ||!message){
        return next(
            res.status(400).json({
                success: false,
                message: "please provide all details"
            })
        
        )
    }
    try {
        await sendEmail({
            email:process.env.SMTP_MAIL,
            subject:"GYM WEBSITE CONTECT",
            message,
            userEmail:email
        })
        res.status(200).json({
            success:true,
            message:"message send successfully."
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"internal server error"
        })
    }
    
})
app.use(router)

 app.listen(process.env.PORT, ()=>{
    console.log(`Server listening at port ${process.env.PORT}`)
 })
