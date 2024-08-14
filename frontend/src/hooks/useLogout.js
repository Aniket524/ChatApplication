import axios from "axios"
import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast"

const useLogout = () => {
    const [loading,setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const logout = async() => {
        setLoading(true)
        try {
            const res = await axios.post('/api/auth/logout')

            const data = res.data
            console.log(res.data)

            if(data.error)
            {
                throw new Error(data.error)
            }

            localStorage.removeItem("chat-user")
            setAuthUser(null)
        } catch (error) {
            console.log('error occurred when calling the logout function!!')
            toast.error(error.response.data.error)
        } finally {
            setLoading(false)
        }
    }

    return {loading, logout}
}

export default useLogout