import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import { apiCheckUsernameExists, apiSignUp } from '../../services/auth'
import {toast} from "react-toastify";
import { Loader } from 'lucide-react';
import { debounce } from 'lodash';


const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);
  const [usernameNotAvailable, setUsernameNotAvailable] = useState(false)
  const navigate = useNavigate();
  const [isUsernameLoading, setIsUsernameLoading] = useState(false);

  const { register, 
    handleSubmit, 
    watch, 
    formState: { errors },
   } = useForm({reValidateMode: "onBlur", mode: "all"});

  const checkUserName = async (userName) => {

    setIsUsernameLoading(true)

    try {
      const res = await apiCheckUsernameExists(userName);
      console.log(res.data);
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
      toast.error("An error occured");
    } finally {
      setIsUsernameLoading(false)
    }
  };

  const userNameWatch = watch("userName");


  useEffect(() => {
    const debouncedSearch = debounce(async () => {
      if (userNameWatch)
        checkUserName(userNameWatch)
    }, 1000)

    debouncedSearch()

  }, [userNameWatch]);



  const onSubmit = async (data) => {
    console.log(data);
    let payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      password: data.password,
      email: data.email,
      confirmPassword: data.password,

    }
    if (data.otherNames) {
      payload = { ...payload, otherNames: data.otherNames };
    }
    try {
      const res = await apiSignUp(payload)
      console.log(res.data);
      toast.success(res.data)
      
      setTimeout(() => {
        navigate("/login");
      }, 5000)
    }

    catch (error) {
      console.log(error);
      toast.error("An error occured");

    } finally {
      setIsSubmitting(false)
    }
  };

  return (



    <div className="flex">
      <section className="  w-1/2 max-h-screen">
        <div className=" items-center justify-center pl-[50px] pr-[50px]   lg:py-1">

          <div className=" rounded-lg shadow">
            <div className="p-4 pb-2 ">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight  md:text-2xl text-black">
                Create an account
              </h1>
              <form className=" md:space-y-2 " onSubmit={handleSubmit(onSubmit)}>

                <div className=''>
                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="firstName" className="block font-medium  text-black">First Name</label>
                    <div>
                      {errors.firstName && (
                        <p className="text-red-500 text-[12px] italic">{errors.firstName.message}</p>
                      )}
                    </div>
                  </div>
                  <input

                    type="text" name="firstName" id="firstName" className="  bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your firstName"
                    {
                    ...register("firstName", {
                      required: "firstname is required",
                      minLength:{
                        value:2,
                        message: "length must be more than 2 characters"
                      }

                    })}

                  />
                  

                </div>

                <div >
                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="lastName" className=" block  font-medium text-black ">Last Name</label>
                    <div>
                      {errors.lastName && (
                        <p className="text-red-500 text-[12px] italic">{errors.lastName.message}</p>
                      )}
                    </div>


                  </div>

                  <input

                    type="text" name="lastName" id="lastName" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your lastName"
                    {
                    ...register("lastName", {
                      required: "lastName is required",
                      minLength: {
                        value: 2,
                        message: "length must be more than 2 characters"
                      }

                    })}

                  />

                </div>

                <div>
                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="otherNames" className=" block  font-medium text-black ">Other Names</label>
                    <div>
                      {errors.otherNames && (
                        <p className="text-red-500 text-[12px] italic">{errors.otherNames.message}</p>
                      )}
                    </div>
                  </div>

                  <input

                    type="text" name="otherNames" id="otherNames" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your other names"
                    {
                    ...register("otherNames")}
                  />

                </div>





                <div>
                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="userName" className="block  font-medium text-black">username</label>
                    <div>
                      {errors.userName && (
                        <p className="text-red-500 text-[12px] italic">{errors.userName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="gap-x-2 ">
                    {isUsernameLoading && <Loader />}
                    {
                      usernameAvailable && <p className="text-green-500"> Username is available </p>
                    }

                    {
                      usernameNotAvailable && <p className="text-red-500">Username is already taken</p>

                    }
                  </div>
                  <input

                    type="text" name="userName" id="userName" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="your custom username"
                    {
                    ...register("userName", {
                      required: "userName is required",
                      minLength: {
                        value: 2,
                        message: "length must be more than 2 characters",
                      },

                    }
                    )}


                  />
                </div>

                <div>
                  <div className='flex flex-row items-center gap-x-[310px]' >
                    <label htmlFor="email" className="block  font-medium  text-black">Email</label>
                    <div>

                      {errors.email && (
                        <p className="text-red-500 text-[12px] italic">{errors.email.message}</p>
                      )}
                    </div>


                  </div>


                  <input type="email" name="email" id="email" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow " placeholder="name@company.com"
                    {
                    ...register("email", { required: "email is required" })
                    }
                  />

                </div>

                <div>

                  <div className='flex flex-row items-center gap-x-[310px]'>
                    <label htmlFor="password" className="block  font-medium  text-black">Password</label>
                    <div>
                      {errors.password && (
                        <p className="text-red-500 text-[12px]  italic">{errors.password.message}</p>
                      )}
                    </div>

                  </div>


                  <input type="password" name="password" id="password" placeholder="••••••••" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow "
                    {
                    ...register("password", { 
                      required: "password is required", minLength: {
                        value:8,
                      message: "Password length must be more than 8 characters",
                    }, })
                    }
                  />

                </div>
                <div>
                  {errors.passrord && (
                    <p className="text-red-500 text-[12px] italic">{errors.passrord.message}</p>
                  )}
                  <label htmlFor="confirm-password" className="block  font-medium  text-black">Confirm Password</label>
                  <input type="confirm-password" name="confirm-password" id="confirm-password" placeholder="••••••••" className=" bg-gray-50 border border-gray-300 text-black text-sm rounded-lg  block w-[350px] p-2.5  placeholder-gray-400 shadow "
                    {
                    ...register("password", { required: "passwords must match", minLength: 8 })
                    }
                  />

                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-teal-600 rounded bg-teal-600 focus:ring-3 focus:ring-primary-300  focus:ring-primary-600 ring-offset-teal-600" />
                  </div>



                </div>

                <button type="submit" className="text-black hover:text-white w-[350px] bg-[#005C66] hover:bg-[#E1B987] focus:ring-4 focus:outline-6 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 shadow">
                  {isSubmitting ? "Loading..." : "Signup"}
                </button>

                <p className="text-sm font-light text-black">
                  Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline ">Login here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>



      <div className="w-1/2 box-border">
        {/* <img src={SignUpImage} alt="signup image" className="  w-[100vw]   h-svh" /> */}
      </div>

    </div>



  )
}

export default SignUp