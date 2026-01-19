
import {User} from "../models/UserModel.js"

// const User = require("../models/UserModel.js")

// create user

export const createUser = async (req,res) =>{
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    }catch(error) {
        res.status(400).json({error:error.message})
    }
}

// get users

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



// get user by ID

export const getUserById = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            res.status(404).json({message:"User not found"})
        }else{
            res.status(200).json(user)
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


// update user

export const updateUser = async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!user){
            res.status(404).json({message:"User not found"})
        }else{
            res.status(200).json(user)
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


// delete user
export const deleteUer = async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            res.status(404).json({message:"User not exist or not found"})
        }else{
            res.status(200).json(user)
        }
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

