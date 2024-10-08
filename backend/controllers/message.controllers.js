import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async(req,res) => {
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all : [senderId,receiverId]}
        })

        if(!conversation)
        {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]      
            })
        }

        const newMessage = await new Message({
            senderId,
            receiverId,
            message
        })

        if(!newMessage)
        {
            return res.status(401).json({message: "Message Not Created"})
        }

        console.log(newMessage._id)
        conversation.messages.push(newMessage._id)

        // await conversation.save()
        // await newMessage.save()

        await Promise.all([conversation.save(), newMessage.save()])

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("error in sending the message", error.message)
        res.status(500).json({error :'Internal server error'})
    }
}

export const getMessages = async(req,res) => {
    try {
        const {id:userToChat} = req.params;
        const senderId = req.user._id;
        
        const conversation = await Conversation.findOne({
            participants: {$all : [senderId,userToChat]}
        }).populate('messages')


        if(!conversation) return res.status(200).json([])
        res.status(200).json(conversation.messages)
    } catch (error) {
        console.log("error in sending the message", error.message)
        res.status(500).json({error :'Internal server error'})
    }
}