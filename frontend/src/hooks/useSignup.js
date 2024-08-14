import { useState } from "react"
import toast from "react-hot-toast"
import axios from 'axios'
import {useAuthContext} from '../context/AuthContext'

const useSignup = () => {
    const [loading,setLoading] = useState('false')
    const {setAuthUser} = useAuthContext()

    const signup = async({fullName,userName,password,confirmPassword,gender}) => {
        const success = handleInputErrors({fullName,userName,password,confirmPassword,gender})
        if(!success) return;
        setLoading(true)
        try {
            const res = await axios.post('/api/auth/signup',{
                fullName,
                userName,
                password,
                confirmPassword,
                gender
            })

            const data = res.data
            console.log(res.data)

            // // Store User to Local Storage
            localStorage.setItem('chat-user',JSON.stringify(data))
            // // store in the context
            setAuthUser(data)
        } catch (error) {
            console.log(error.response.data.error)
            toast.error(error.response.data.error)
        } finally {
            setLoading(false)
        }

    }
    return {loading, signup };
}

export default useSignup

const handleInputErrors = ({fullName,userName,password,confirmPassword,gender}) => {
    if(!fullName || !userName || !password || !confirmPassword || !gender) 
        {
            toast.error('Please Fill All the Details')
            return false;   
        }

    if(password !== confirmPassword){
        toast.error('Password does not match')
        return false;
    }

    if(password.length < 6)
    {
        toast.error('Password length will be greater than 6 characters')
        return false;
    }

    return true;
}