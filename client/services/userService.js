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


