import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Loader } from 'lucide-react';
import { debounce } from 'lodash';
import { apiCheckUsernameExists, apiSignUp } from '../../services/auth';


const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false);
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    reValidateMode: "onBlur", 
    mode: "all"
  });

  const userNameWatch = watch("userName");

  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch) {
        setIsUsernameLoading(true);
        try {
          const res = await apiCheckUsernameExists(userNameWatch);
          const user = res.data.user;
          if (user) {
            setUsernameNotAvailable(true);
            setUsernameAvailable(false);
          } else {
            setUsernameAvailable(true);
            setUsernameNotAvailable(false);
          }
        } catch (error) {
          console.log(error);
          toast.error("An error occurred while checking the username");
        } finally {
          setIsUsernameLoading(false);
        }
      }
    }, 1000);
    debouncedSearch();
  }, [userNameWatch]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      password: data.password,
      email: data.email,
      confirmPassword: data.confirmPassword,
      otherNames: data.otherNames || undefined,
    };

    try {
      const res = await apiSignUp(payload);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred during signup");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex">
      <section className="w-1/2 max-h-screen">
        <div className="items-center justify-center pl-[50px] pr-[50px] lg:py-1">
          <div className="rounded-lg shadow">
            <div className="p-4 pb-2">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight md:text-2xl text-black">
                Create an account
              </h1>
              <form className="md:space-y-2" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="firstName" className="block font-medium text-black">First Name</label>
                    {errors.firstName && <p className="text-red-500 text-[12px] italic">{errors.firstName.message}</p>}
                  </div>
                  <input
                    type="text" name="firstName" id="firstName" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-[350px] p-2.5 placeholder-gray-400 shadow"
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: { value: 2, message: "Length must be more than 2 characters" },
                    })}
                  />
                </div>

                <div>
                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="lastName" className="block font-medium text-black">Last Name</label>
                    {errors.lastName && <p className="text-red-500 text-[12px] italic">{errors.lastName.message}</p>}
                  </div>
                  <input
                    type="text" name="lastName" id="lastName" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-[350px] p-2.5 placeholder-gray-400 shadow"
                    {...register("lastName", {
                      required: "Last name is required",
                      minLength: { value: 2, message: "Length must be more than 2 characters" },
                    })}
                  />
                </div>

                <div>
                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="userName" className="block font-medium text-black">Username</label>
                    {errors.userName && <p className="text-red-500 text-[12px] italic">{errors.userName.message}</p>}
                  </div>
                  <input
                    type="text" name="userName" id="userName" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-[350px] p-2.5 placeholder-gray-400 shadow"
                    {...register("userName", {
                      required: "Username is required",
                      minLength: { value: 2, message: "Length must be more than 2 characters" },
                    })}
                  />
                  <div className="flex items-center gap-x-2">
                    {isUsernameLoading && <Loader />}
                    {usernameAvailable && <p className="text-green-500">Username is available</p>}
                    {usernameNotAvailable && <p className="text-red-500">Username is already taken</p>}
                  </div>
                </div>

                <div>
                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="email" className="block font-medium text-black">Email</label>
                    {errors.email && <p className="text-red-500 text-[12px] italic">{errors.email.message}</p>}
                  </div>
                  <input
                    type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-[350px] p-2.5 placeholder-gray-400 shadow"
                    {...register("email", { required: "Email is required" })}
                  />
                </div>

                <div>
                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="password" className="block font-medium text-black">Password</label>
                    {errors.password && <p className="text-red-500 text-[12px] italic">{errors.password.message}</p>}
                  </div>
                  <input
                    type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-[350px] p-2.5 placeholder-gray-400 shadow"
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 8, message: "Password length must be more than 8 characters" },
                    })}
                  />
                </div>

                <div>
                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="confirmPassword" className="block font-medium text-black">Confirm Password</label>
                    {errors.confirmPassword && <p className="text-red-500 text-[12px] italic">{errors.confirmPassword.message}</p>}
                  </div>
                  <input
                    type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg block w-[350px] p-2.5 placeholder-gray-400 shadow"
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value) => value === watch("password") || "Passwords do not match",
                    })}
                  />
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" className="w-4 h-4 border border-teal-600 rounded bg-teal-600 focus:ring-3 focus:ring-primary-300" />
                  </div>
                  <span className="ml-2 text-gray-700">
                    By signing up, you agree to our{' '}
                    <a href="/terms" className="text-blue-500 hover:underline">Terms & Conditions</a>.
                  </span>
                </div>

                <button type="submit" className="text-black hover:text-white w-[350px] bg-[#32C69A] hover:bg-[#E1B987] focus:ring-4 focus:outline-6 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow">
                  {isSubmitting ? "Loading..." : "Signup"}
                </button>

                <p className="text-sm font-light text-black">
                  Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline">Login here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
