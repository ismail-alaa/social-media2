
import { Button, Input } from '@heroui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { loginApi } from '../Services/AuthService'
import { loginSchema } from './../schema/loginSchema';
import { Link, useNavigate } from 'react-router-dom'
import { authContext } from '../Contexts/AuthContext'
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';




export default function LoginPage() {
    const { setIsLogin } = useContext(authContext)
    const navigate = useNavigate();
    const [isLoading, setIsLoaging] = useState(false)
    const [errorMsg, setErrorMsg] = useState("")
    const { handleSubmit, register, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(loginSchema),
    })

    async function handleLogin(formData) {

        setIsLoaging(true)
        const data = await loginApi(formData);

        setIsLoaging(false)
        if (data.error) {
            setErrorMsg(data.error)
        } else {

            localStorage.setItem("token", data.token)
            setErrorMsg("")
            setIsLogin(true)
            Toastify({
                text: "Your account is already correct",
                duration: 2000,
                gravity: "top",
                position: "center",
                style: {
                    background: "linear-gradient(to right, #A855F7, #EC4899)",
                }
            }).showToast();

            setTimeout(() => {
                navigate("/");
            }, 3000);



        }
    }
    return (
        <div className='h-screen relative py-10 flex flex-col items-center gap-4 justify-center bg-linear-[135deg] from-purple-500 to-pink-500  '>
            <div className=' max-sm:w-[70%] max-sm:px-2  m-auto  p-8  text-center rounded-2xl bg-white/10  backdrop-blur-md shadow-2xl w-lg'>
                <h1 className='bg-linear-90 from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4'>Login</h1>
                <div className="animate-bounce absolute -top-7 -left-11 size-12 rounded-full bg-linear-135 from-pink-400 from-50% to-fuchsia-700"></div>
                <form onSubmit={handleSubmit(handleLogin)} className='flex flex-col gap-6 w-full'>
                    <Input isInvalid={Boolean(errors.email?.message)} errorMessage={errors.email?.message} className='max-sm:w-full' label="Email" type="email" {...register('email')} />
                    <Input isInvalid={Boolean(errors.password?.message)} errorMessage={errors.password?.message} className='max-sm:w-full' label="Password" type="password" {...register('password')} />
                    <Button isLoading={isLoading} type='submit' className='bg-linear-[135deg] from-purple-500 to-pink-500' color="secondary"><i className=" text-white fa-solid fa-right-to-bracket" />Login</Button>
                    {errorMsg && <p className='text-sm text-red-500 bg-red-300 rounded p-2'><i className="mx-1 fa-solid fa-circle-exclamation" />{errorMsg}</p>}
                    <p>you don't have an account?<Link to={"/register"} className='ml-1 text-blue-600'>Register!</Link></p>
                </form>
                <div className="animate-bounce absolute -bottom-9 -right-12 size-12  rounded-full bg-linear-135 from-pink-400 from-50% to-fuchsia-700"></div>
            </div>
        </div>
    )
}
































