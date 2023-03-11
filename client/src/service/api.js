import axios from 'axios';


const url='http://localhost:8000';

export const addUser=async (data)=>{
    try {
        await axios.post(`${url}/add`,data);
    } catch (error) {
        console.log("error while addUser API",error.message);
    }
};


export const getUsers=async()=>{
   try {
    let response=await axios.get(`${url}/users`);
     return response.data;
   } catch (error) {
    console.log('error while calling getUsers ',error.message);
   }
}



export const setConversation=async(data)=>{
    try {
        await axios.post(`${url}/conversation/add`,data);
    } catch (error) {
        console.log('error while calling setConversation ',error.message);
    }
}



export const getConversation=async(data)=>{
    try {
        let response=await axios.post(`${url}/conversation/get`,data);
        return response.data;
    } catch (error) {
        console.log('error while calling getConversation ',error.message);
    }
}



