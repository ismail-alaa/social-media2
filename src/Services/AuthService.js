import axios from "axios";
const basUrl = "https://linked-posts.routemisr.com/"
export async function registerApi(formData) {
    try {
        const { data } = await axios.post(basUrl + "users/signup", formData);
        return data
    } catch (error) {
        return error.response? error.response.data : {error:  error.message}
        
    }
    
}
export async function loginApi(formData) {
    try {
        const { data } = await axios.post(basUrl + "users/signin", formData);
        return data
    } catch (error) {
        return error.response? error.response.data : {error:  error.message}
        
    }
    
}