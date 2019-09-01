import axios from 'axios'
axios.defaults.baseURL='http://localhost:5005';
export let register=(data)=>{
    return axios.post('/register',data)
 } 
 export let uploadPic=(data)=>{
    return axios.post('/upload',data)
 } 
 export let loginMethod=(data)=>{
    return axios.post('/login',data)
 } 
 export let registerEx=(data)=>{
   return axios.post('/registerExample',data)
} 