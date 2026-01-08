import User from "../models/UserModel.js";

// create user

export const createUser = async (req,res) =>{
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    }catch(error) {
        res.status(400).json({error:error.message})
    }
}

export const getUser = async (req,res)=>{
    try{
        const users = await User.find()
        if(!users){
            res.status(404).json({message:"No users found"})
        }
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

