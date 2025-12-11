import { Button, Input } from '@heroui/react'
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { changePasswordApi } from '../Services/IngenralServices';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { authContext } from '../Contexts/AuthContext';

export default function ChangePasswordPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [isAnotherError, setIsAnotherError] = useState(false)
  const { setIsLogin } = useContext(authContext)

  async function handleChangePassword(e) {
    e.preventDefault();
    setIsLoading(true);
    if (password === rePassword) {
      setIsLoading(false);
      setIsError(true);

    } else {
      const { message } = await changePasswordApi(password, rePassword);
      if (message == "success") {
        localStorage.removeItem("token")
        setIsLogin(null)
        Toastify({
          text: "Your Password has been Changed",
          duration: 2000,
          gravity: "top",
          position: "center",
          style: {
            background: "linear-gradient(to right, #A855F7, #EC4899)",
          }
        }).showToast();
        setIsLoading(false)
        setTimeout(() => {
          navigate("/login")
        }, 3000);

      }else{
        setIsAnotherError(true)
        setIsLoading(false)


      }





    }



  }





  return (
    <div className='h-screen py-10'>
      <div className=' max-sm:w-[70%] max-sm:px-2  m-auto  p-8  text-center rounded-2xl bg-white/10  backdrop-blur-md shadow-2xl w-lg'>
        <h1 className='bg-linear-90 from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'>Change Your Password</h1>
        <div className="animate-bounce absolute -top-7 -left-11 size-12 rounded-full bg-linear-135 from-pink-400 from-50% to-fuchsia-700"></div>
        <form onSubmit={handleChangePassword} className='flex flex-col gap-6 w-full'>
          <Input onChange={(e) => setPassword(e.target.value)} className='max-sm:w-full' label="Password" type="password" />
          <Input onChange={(e) => setRePassword(e.target.value)} className='max-sm:w-full' label="RePassword" type="password" />
          <Button isLoading={isLoading} type='submit' className='bg-linear-[135deg] from-purple-500 to-pink-500' color="secondary"><i className="fa-solid fa-lock" />Submit And Change</Button>
          {isError && <p className='text-sm text-red-500 bg-red-300 rounded p-2'><i className="mx-1 fa-solid fa-circle-exclamation" />Password and Repassword at the same</p>}
          {isAnotherError && <p className='text-sm text-red-500 bg-red-300 rounded p-2'><i className="mx-1 fa-solid fa-circle-exclamation" />You Have an Error</p>}
        </form>
        <div className="animate-bounce absolute -bottom-9 -right-12 size-12  rounded-full bg-linear-135 from-pink-400 from-50% to-fuchsia-700"></div>
      </div>
    </div>
  )
}
