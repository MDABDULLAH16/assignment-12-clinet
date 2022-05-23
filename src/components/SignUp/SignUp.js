import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SignUp = () => {

  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const { register, formState: { errors }, handleSubmit } = useForm();


  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigat = useNavigate();

  let errorMessage;




  if (loading || gloading || updating) {
    return <Loading></Loading>
  }

  if (error || gerror || updateError) {
    errorMessage = <p className='text-red-500 text-center p-3'><small>{error?.message || updateError?.message || gerror?.message}</small></p>
  }

  if (user || guser) {
    console.log(user || guser);
    navigat('/services')
  }

  const onSubmit = async data => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigat('/services')
  }

  return (


    <div className=' flex h-auto mt-7 mb-7 justify-center items-center '>
      <div className="card  w-96 bg-base-300 shadow-xl">
        <h2 className="text-4xl text-bold text-primary text-center pt-5">Sign Up</h2>
        <div className="card-body">
          <div className='them'></div>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input {...register("name", {
                required: {
                  value: true,
                  message: 'Name is required'
                }
              })}
                type="text" placeholder="Your Name"
                className="input input-bordered w-full max-w-xs" />
              <label className="label">
                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>
            </div>


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
            {errorMessage}

            <input className='btn w-full max-w-xs font-bold' type="submit" value="SIGN UP" />
          </form>
          <small><p className=' text-center'>
            Already have an account ?
            <Link to="/login" className='text-primary'> Login </Link>
          </p></small>
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

export default SignUp;