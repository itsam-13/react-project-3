import { nanoid } from "@reduxjs/toolkit"
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";



const Register = () => {

    const { register, reset, handleSubmit } = useForm()


    const RegisterHandler = (user) => {
        user.id = nanoid()
        console.log(user);

    }

    return (
        <form onSubmit={handleSubmit(RegisterHandler)} className="flex flex-col w-1/2 justify-start items-start">

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

            <button className="rounded bg-gray-600 p-2">Register User</button>
            <p className="mt-5">
                Already have an Account ? <Link className='text-blue-500' to='/login'> <i>Login</i> </Link>
            </p>

        </form>
    )
}

export default Register
