import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res) => {
    try {
        const loogedInUserId = req.user._id;

        const filteredUsers = await User.find({_id : {$ne : loogedInUserId}}).select('-password')

        res.status(200).json(filteredUsers)

    } catch (error) {
        console.log('error while getting the users',error.messagee)
        res.status(501).json({error: error.message})
    }
}