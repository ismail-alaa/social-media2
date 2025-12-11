import { createContext, useState } from "react";

import axios from "axios";
import { useEffect } from "react";
const basUrl = "https://linked-posts.routemisr.com/"


export const authContext = createContext();
export default function AuthContextProvider({ children }) {

    const [isLogin, setIsLogin] = useState(localStorage.getItem("token") != null)
    const [userData, setUserData] = useState(null)



    



    async function getUserDataApi() {
        try {
            const { data } = await axios.get(basUrl + "users/profile-data", {
                headers: {
                    token: localStorage.getItem("token")
                }
            });
            return data
        } catch (error) {
            return error.response ? error.response.data : { error: error.message }

        }
    }
    async function getUserData() {
        const { message, user } = await getUserDataApi()
        if (message == "success") {
            console.log(user);

            setUserData(user)
        }
    }
    useEffect(() => {
        if (isLogin) {
            getUserData();
        } else {
            setUserData(null)

        }

    }, [isLogin])

    return <authContext.Provider value={{ isLogin, setIsLogin, userData, setUserData, getUserDataApi }}>
        {children}

    </authContext.Provider>
}