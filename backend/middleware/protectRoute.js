import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute = async(req, res, next) => {
    try {
        const token = req.cookies.jwt;
        if(!token)       
        {
            return res.status(401).json({error: 'Unauthorizes No Token Found'})
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET)
        if(!decode)
        {
            return res.status(401).json({error: 'Token Expired Please Log In Again'})
        }

        const user = await User.findById(decode.userId).select("-password")

        if(!user)
        {
            return res.status(401).json({error: "User Not Found"})
        }

        req.user = user;

        next()
    } catch (error) {
        console.log('Error in protected middleware', error.message)
        res.status(500).json({error: 'Internal server error'})
    }
}

export default protectRoute;