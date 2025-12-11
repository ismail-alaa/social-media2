
import axios from "axios";
const basUrl = "https://linked-posts.routemisr.com/"



export async function uploadingPhotoApi(formData) {
    try {
        const { data } = await axios.put(basUrl + "users/upload-photo", formData, {
            headers: {
                token: localStorage.getItem("token")
            }
        });
        return data
    } catch (error) {
        return error.response ? error.response.data : { error: error.message }

    }
}
export async function changePasswordApi(password, rePassword) {
    try {
        const { data } = await axios.patch(basUrl + "users/change-password", {
            password: password,
            newPassword: rePassword
        }, {
            headers: {
                token: localStorage.getItem("token")
            }
        });
        return data
    } catch (error) {
        return error.response ? error.response.data : { error: error.message }

    }
}


