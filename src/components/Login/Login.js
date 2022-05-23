import React from 'react';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();

  const navigat = useNavigate();




  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


  let errorMessage;


  if (loading || gloading) {
    return <Loading></Loading>
  }

  if (error || gerror) {
    errorMessage = <p className='text-red-500 text-center p-3'><small>{error?.message || gerror?.message}</small></p>
  }

  if (user || guser) {
    console.log(user || guser);
    navigat('/services')
  }

  const onSubmit = data => {
    navigat('/services')
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  }




  return (
    <div className=' flex h-auto mt-7 mb-7 justify-center items-center '>
      <div className="card  w-96 bg-base-300 shadow-xl">
        <h2 className="text-4xl text-bold text-primary text-center pt-5">Login</h2>
        <div className="card-body">
          <div className='them'></div>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input {...register("email", {
                required: {
                  value: true,
                  message: 'Email is required'
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: 'Provide a valid Email '
                },
              })}
                type="email" placeholder="Your Email"
                className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input {...register("password", {
                required: {
                  value: true,
                  message: 'Password is required'
                },

                minLength: {
                  value: 6,
                  message: 'Must Be 6 Characters Or Longer'
                },
              })}
                type="password" placeholder="Your Password"
                className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>

            {/* reset password  */}

            {/* <button   > <small className='pb-8'> Reset Password</small> </button> */}


            {errorMessage}

            <input className='btn w-full max-w-xs mt-3 font-bold' type="submit" value="Login" />
          </form>
          <small><Link to="/signup"><p className='text-primary text-center'>Create a New Account</p></Link></small>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline  text-bold btn-secondary">
            Continue With Google
          </button>

        </div>
      </div>
    </div>
  );
};

export default Login;