

import axios from "axios";
const basUrl = "https://linked-posts.routemisr.com/"





export async function addComment(commentContent, postId) {
    try {
        const { data } = await axios.post(basUrl + "comments", {
            content: commentContent,
            post: postId
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
export async function deleteCommentApi(commentId) {
    try {
        const { data } = await axios.delete(basUrl + "comments/" + commentId, {
            headers: {
                token: localStorage.getItem("token")
            }
        });
        return data
    } catch (error) {
        return error.response ? error.response.data : { error: error.message }

    }
}
export async function updateCommentApi(commentId,newContentComment) {
    try {
        const { data } = await axios.put(basUrl + "comments/" + commentId,{
            content:newContentComment
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



