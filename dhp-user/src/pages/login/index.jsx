import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { InfinitySpin } from 'react-loader-spinner';
import { apiLogin } from '../../services/auth'; 

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ reValidateMode: "onBlur", mode: "all" });

  const addToLocalStorage = (accessToken, user) => {
    localStorage.setItem("accessToken", accessToken);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiLogin({
        email: data.email,
        password: data.password,
      });
      addToLocalStorage(res.data.accessToken, res.data.user);
      toast.success("Login successful");
      setTimeout(() => {
        navigate("/appointments");
      }, 5000);
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex h-screen'>
      <div className="mx-auto w-fit flex flex-col items-start gap-y-4 p-20">
        <div className="flex flex-col">
          <p className="text-center font-bold text-4xl mb-2">Welcome Back!</p>
          <h6 className='text-center'>Log in to your portfolio</h6>
          <form className='flex flex-col gap-y-4 mt-4' onSubmit={handleSubmit(onSubmit)}>
            <div className='w-full'>
              <label htmlFor='email' className='block text-sm font-bold'>Your Email</label>
              <input
                type='text'
                id="email"
                name="email"
                className="w-[500px] mt-1 p-2 border border-gray-300 rounded"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

            <div className='w-full'>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-[500px] mt-1 p-2 border border-gray-300 rounded"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <div className='flex items-center'>
                <input type="checkbox" id="remember-me" name="remember-me" className="mr-2" />
                <label htmlFor="remember-me" className="text-sm font-medium text-gray-700">Remember me</label>
              </div>
            </div>

            <div>
              <Link to="password-recovery" className="text-sm text-gray-600 hover:underline">Forgot password?</Link>
            </div>

            <button type="submit" className="mt-4 py-3 px-8 bg-[#32C69A] hover:bg-teal-600 hover:text-white shadow text-white rounded-md">
              {isSubmitting ? <InfinitySpin visible={true} width="100" color="#4fa94d" ariaLabel="infinity-spin-loading" /> : "Login"}
            </button>

            <div className="mt-4 text-sm text-gray-600">
              Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Register</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2">
        {/* Add an image or any other content you like */}
      </div>
    </div>
  );
}

export default Login;
