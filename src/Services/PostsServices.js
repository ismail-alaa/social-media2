import axios from "axios";
const basUrl = "https://linked-posts.routemisr.com/"






export default async function getAllPostsApi() {
    try {
        const { data } = await axios.get(basUrl + "posts", {
            headers: {
                token: localStorage.getItem("token")
            },
            params: {

                sort: "-createdAt"
            }

        });
        return data
    } catch (error) {
        return error.response ? error.response.data : { error: error.message }

    }

}
export async function getUserPostsApi(userId) {
    try {
        const { data } = await axios.get(basUrl + "users/" + userId + "/posts", {
            headers: {
                token: localStorage.getItem("token")
            },


        });
        return data
    } catch (error) {
        return error.response ? error.response.data : { error: error.message }

    }

}








export async function addPostApi(formData) {
    try {
        const { data } = await axios.post(basUrl + "posts", formData, {
            headers: {
                token: localStorage.getItem("token")
            }

        });
        return data
    } catch (error) {
        return error.response ? error.response.data : { error: error.message }

    }

}






export async function getSinglePostApi(postId) {
    try {
        const { data } = await axios.get(basUrl + "posts/" + postId, {
            headers: {
                token: localStorage.getItem("token")
            }
        });
        return data
    } catch (error) {
        return error.response ? error.response.data : { error: error.message }

    }

}

export async function deletePostApi(postId) {
    try {
        const { data } = await axios.delete(basUrl + "posts/" + postId, {
            headers: {
                token: localStorage.getItem("token")
            }
        });
        return data
    } catch (error) {
        return error.response ? error.response.data : { error: error.message }

    }

}



export async function updatePostApi(postId,formData) {
    try {
        const { data } = await axios.put(basUrl + "posts/" + postId, formData,{
            headers: {
                token: localStorage.getItem("token")
            }
        });
        return data
    } catch (error) {
        return error.response ? error.response.data : { error: error.message }

    }
}




