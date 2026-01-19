import axios from "axios"


const API_URL = "http://localhost:5000/api/users/"

export const createUser = async (data) => {
  try {
    const response = await axios.post(API_URL, data);
    return response.data; 
  } catch (error) {
    console.error("Failed to create user:", error);
    throw error; 
  }
};

export const getUser = async () =>{
  try{
    const response = await axios.get(API_URL)
    return response.data
  }catch(error){
    console.log("Failed to fetch data",error)
  
}
}

export const getUserById = async(id)=>{
  try{
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
  }catch(error){
    console.log(error)
    throw error
  }
}

export const updateUser = async(id,data)=>{
  try{
    const response = await axios.put(`${API_URL}/${id}`,data)
    return response.data
  }catch(error){
    console.log(error)
    throw error
  }
}

export const deleteUer = async(id)=>{
  try{
    const response=await axios.delete(`${API_URL}/${id}`)
    return response.data
  }catch(error){
    console.log(error)
    throw error
  }
}







