import express from "express"

import {createUser,getUser,getUserById,updateUser,deleteUer} from "../controllers/userController.js"

export const router = express.Router()

router.post("/",createUser)
router.get("/",getUser)
router.get("/:id",getUserById)
router.put("/:id",updateUser)
router.delete("/:id",deleteUer)



export default router;

