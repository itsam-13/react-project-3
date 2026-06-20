import axios from "../api/axiosconfig";
import { loadUser } from "./userSlice";

export const asyncGetUsers = async ()=>{
    try {
        const res = await axios.get("/users")
        loadUser(res.data)
        
    } catch (error) {
        console.log(error);
        
    }
}