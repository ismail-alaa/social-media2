
import { Button, Input, Select, SelectItem } from '@heroui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { registerApi } from '../Services/AuthService'
import { registerSchema } from './../schema/registerSchema';
import { Link, useNavigate } from 'react-router-dom'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'




export default function RegisterPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoaging] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")
  const [successMsg, setSuccessMsg] = useState("")
  const { handleSubmit, register, formState: { errors }, recet  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    resolver: zodResolver(registerSchema),
    mode: "onBlur"
  })

  async function handleRegister(formData) {
    setIsLoaging(true)
    const data = await registerApi(formData);

    setIsLoaging(false)
    if (data.error) {
      setErrorMsg(data.error)
      setSuccessMsg("")
    } else {
      setErrorMsg("")
      setSuccessMsg(data.message)


      Toastify({
        text: "Your account has been created",
        duration: 2500
      }).showToast();



      setTimeout(() => {

        navigate("/login")
      }, 2000);
    }
    
  }




  return (




    <div className='  relative py-10 flex flex-col items-center gap-4 justify-center bg-linear-[135deg] from-purple-500 to-pink-500  '>
      <div className=' max-sm:w-[70%] max-sm:px-2  m-auto  p-8  text-center rounded-2xl bg-white/10  backdrop-blur-md shadow-2xl w-lg'>
        <h1 className='bg-linear-90 from-purple-600 to-pink-600 bg-clip-text text-transparent'>Join Us Today</h1>
        <p className='py-1 bg-linear-90 from-purple-100 to-pink-200 bg-clip-text text-transparent'>Create your account and connecting</p>
        <div className="animate-bounce absolute -top-7 -left-11 size-12 rounded-full bg-linear-135 from-pink-400 from-50% to-fuchsia-700"></div>
        <form onSubmit={handleSubmit(handleRegister)} className='flex flex-col gap-6 w-full'>
          <Input isInvalid={Boolean(errors.name?.message)} errorMessage={errors.name?.message} className='max-sm:w-full ' label="Full Name" type="text" {...register('name')} />
          <Input isInvalid={Boolean(errors.email?.message)} errorMessage={errors.email?.message} className='max-sm:w-full' label="Email" type="email" {...register('email')} />
          <Input isInvalid={Boolean(errors.password?.message)} errorMessage={errors.password?.message} className='max-sm:w-full' label="Password" type="password" {...register('password')} />
          <Input isInvalid={Boolean(errors.rePassword?.message)} errorMessage={errors.rePassword?.message} className='max-sm:w-full' label="Confirm Password" type="password" {...register('rePassword')} />
          <Input isInvalid={Boolean(errors.dateOfBirth?.message)} errorMessage={errors.dateOfBirth?.message} className='max-sm:w-full' label="Date Of Birth" type="date" {...register('dateOfBirth')} />
          <Select isInvalid={Boolean(errors.gender?.message)} errorMessage={errors.gender?.message} className='max-sm:w-full' label="Gender" {...register('gender')}>
            <SelectItem key={"male"}>Male</SelectItem>
            <SelectItem key={"female"}>Female</SelectItem>
          </Select>
          <Button isLoading={isLoading} type='submit' className='bg-linear-[135deg] from-purple-500 to-pink-500' color="secondary"><i className="text-white fa-solid fa-user-plus" /> Craete Account</Button>
          {errorMsg && <p className='text-sm text-red-500 bg-red-300 rounded p-2'><i className="mx-1 fa-solid fa-circle-exclamation" />{errorMsg}</p>}
          {successMsg && <p className='text-sm text-green-900 bg-green-300 rounded p-2'><i className="mx-1 fa-solid fa-circle-check" />{successMsg}</p>}
          <p>You have an account already?<Link to={"/login"} className='ml-1 text-blue-600'>Login!</Link></p>
        </form>
        <div className="animate-bounce absolute -bottom-9 -right-12 size-12  rounded-full bg-linear-135 from-pink-400 from-50% to-fuchsia-700"></div>
      </div>
    </div>





  )
}
