import { useState } from 'react';
import image from '../assets/girlinnature.jpeg'
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom'

const LogInPage = () => {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Watch the "example" input
  const watchedExample = watch("username");
  const [Name, setName] = useState("Aman Maikhuree")
  
  function submitData(data){
    console.log(data)
    console.log(watchedExample)
    navigate("/home");
    setName(watchedExample)
      console.log(errors)
  }
  return (
    <div className='h-[100vh] w-[100vw] px-4 py-4 bg-gradient-to-b from-purple-700 to-blue-400 flex'>

      {/* content container */}
      <div className=' max-w-[1080px] mx-auto flex flex-col gap-2 md:flex-row justify-center items-center'>
        {/* left part */}
        <div className='px-2 rounded-md relative'>
          <img src={image} alt="girl blowing bubblels in a beautiful garden"
          className='rounded-md h-[25rem] md:h-[30rem] w-[100%] md:w-full opacity-85' />
          <p className='absolute top-17 left-14 text-white font-bold text-xl'>
            Welcome Back!
          </p>
          <p className='absolute top-24 left-14 text-purple-200 font-bold text-xl'>{Name}</p>
        </div>
        {/* right part */}
        <div className='px-2 py-1'>
          <form onSubmit={handleSubmit(submitData)}
          className='flex flex-col gap-2 items-center justify-center text-white'>

            <input type="text" placeholder='username' className='border rounded-sm px-2 py-1 text-white md:px-4 md:py-2'
            {...register("username", { required: true ,maxLength: 18, minLength:3})}/>

            <input type="password" placeholder="password" className='border rounded-sm px-2 py-1 text-white md:px-4 md:py-2'
            {...register("password", { required: true ,maxLength:16 , minLength:6})}
            />

            <input type="submit" value="Submit" className='border px-4 py-1 rounded-md font-bold bg-blue-950 md:px-6 md:py-2'/>
          </form>
        </div>
      </div>
    </div>
  )
}
export default LogInPage