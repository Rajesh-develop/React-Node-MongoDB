import React,{useState,useEffect} from 'react'
import {getUser} from "../services/userService"
import { Link } from "react-router-dom"

const UserList = () => {

  const [users,setUsers] = useState([])

  console.log(users)

 

  useEffect(()=>{
    fetchUsers()
  },[])

  const fetchUsers = async () => {
  try {
    const users = await getUser();
    setUsers(users);
  } catch (error) {
    console.error(error);
    setUsers([]);
  }
};



  return (
    <div>
      <h1>UserList:</h1>
     {users.length === 0 ? (<p>No users found</p>) : 
     (<ul>{users.map((user) => (
      <li key={user._id}>
        <ol>
          {user.name} - {user.email} - {user.age}
        </ol>
      </li>
    ))}
  </ul>
)}
      <Link to={"/"}>Add Users</Link>

    </div>
  )
}

export default UserList