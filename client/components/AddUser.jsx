import React,{useState} from 'react'
import {createUser} from "../services/userService.js"
import {useNavigate} from "react-router-dom"


const AddUser = () => {

const [form,setForm] = useState({
    name:"",
    email:"",
    age:""
}) 
const navigate = useNavigate();

const formData = (event)=>{
setForm({...form,[event.target.name]:event.target.value})
}

const formSubmit = async (event) =>{
    event.preventDefault()
    try{
      await createUser(form)
      navigate("/users")
      alert("User created Successfully...!")
    }catch(error){
      console.log("failed to create user",error)
      alert("Failed to create User.....!")
     
    }
}

 

  return (
    <div>
        <h1>Add User</h1>
        <form onSubmit={formSubmit}>
            <input name='name' placeholder='Enter your name' value={form.name} onChange={formData}/>
            <input name='email' placeholder='Enter your email' value={form.email}     onChange={formData}/>
            <input name='age' placeholder='Enter your age' value={form.age} onChange={formData}/>
            <button type='submit'>Add User</button>
        </form>
    </div>

  )
}

export default AddUser