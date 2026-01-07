import React,{useState} from 'react'
import {createUser} from "../services/userService.js"
// import {useNavite} from "react-router-dom"


const AddUser = () => {

const [form,setForm] = useState({
    name:"",
    email:"",
    age:""
}) 
// const navigate = useNavite();

const formData = (event)=>{
setForm({...form,[event.target.name]:event.target.value})
}

const formSubmit = async (event) =>{
    event.preventDefault()
    await createUser(form)
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