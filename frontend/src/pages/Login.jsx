import { nanoid } from "@reduxjs/toolkit"
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";



const Login = () => {

    const { register, reset, handleSubmit } = useForm()


    const LoginHandler = (user) => {
        
        console.log(user);

    }

    return (
        <form onSubmit={handleSubmit(LoginHandler)} className="flex flex-col w-1/2 justify-start items-start">
            <input
                {...register("username")}
                className="mb-3 outline-0 border-b p-2 text-4xl"
                type="text"
                placeholder="John-Doe" />

            <input
                {...register("email")}
                className="mb-3 outline-0 border-b p-2 text-4xl"
                type="email"
                placeholder="JohnDoe@email.com" />
            <input
                {...register("password")}
                className="mb-3 outline-0 border-b p-2 text-4xl"
                type="password"
                placeholder="*********" />

            <button className="rounded bg-gray-600 p-2">Login User</button>
            <p className="mt-5">
                Don't have an Account ? <Link className='text-blue-500' to='/register'> <i>Register</i> </Link>
            </p>

        </form>
    )
}

export default Login
