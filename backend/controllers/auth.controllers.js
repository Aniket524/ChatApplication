import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js"

export const Signup = async(req,res) => {
    try {
        const {fullName,userName,password,confirmPassword, gender} = req.body
        console.log(req.body)

        if(password!==confirmPassword)
        {
            return res.status(400).json({error: "Passwords Does Not Match"})
        }

        const user = await User.findOne({userName:userName})

        if(user)
        {
            return res.status(400).json({error: "User Already Exist"})
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hassedPassword = await bcrypt.hash(password,salt)

        // Profile Api
        const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password: hassedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfile : girlProfile 
        })

        generateTokenAndSetCookie(newUser._id,res)
        
        newUser.save()

        res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePc: newUser.profilePic
        })

    } catch (error) {
        console.log('Error while getting the data', error.message)
        res.status(500).json({error:'internal server error'})
    }    
}

export const Login = async(req,res) =>{
    try {
        const {userName,password} = req.body
        console.log(req.body)

        const user = await User.findOne({userName})

        if(!user) return res.status(400).json({error:"User Not Exits"})
        
        const comparePassword = await bcrypt.compare(password,user.password)

        if(!comparePassword) return res.status(400).json({error: "Password Not Matched"})

        generateTokenAndSetCookie(user._id,res)

        res.status(201).json(user.userName)

    } catch (error) {

        console.log('Error while getting the data', error.message)

        res.status(500).json({error:'internal server error'})
    }
}

export const Logout = async(req,res)=>{
    try {
        const {userName,password} = req.body

        console.log(req.body)

        res.cookie('jwt','',{maxAge:0})
        res.status(200).json({message: 'Logged Out Successfully'})
    } catch (error) {
        console.log('Error while getting the data', error.message)

        res.status(500).json({error:'internal server error'})
    }
}