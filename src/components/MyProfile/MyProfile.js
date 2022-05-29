import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { displayName, photoURL, email } = user;
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className='mt-10'>
            <div className="flex align-middle justify-start">
                <img
                    className="w-28 rounded-full"
                    src={
                        photoURL
                            ? photoURL
                            : `https://i.ibb.co/PMQQ6Kz/icon-user-default.png`
                    }
                    alt="userPhoto"
                />
                <div className='mr-10 font-bold'>Name: {displayName}</div>
                <div className='mr-10 font-bold'>Email: {email}</div>
            </div>

            <div>
                <h2 className="text-center text-2xl">Update Your Profile</h2>
                <form className="w-2/3 m-auto" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address",
                                },
                            })}
                            type="name"
                            placeholder="Enter Your Address"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Education</span>
                        </label>
                        <input
                            {...register("education", {
                                required: {
                                    value: true,
                                    message: "Enter your name",
                                },
                            })}
                            type="name"
                            placeholder="Education"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <input
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Enter your name",
                                },
                            })}
                            type="name"
                            placeholder="Phone Number"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Enter your name",
                                },
                            })}
                            type="name"
                            placeholder=" LinkedIn profile link"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Enter your name",
                                },
                            })}
                            type="name"
                            placeholder="Enter Your Name"
                            className="input input-bordered"
                        />
                    </div>
                    <div className="form-control ">
                        <button className="btn btn-accent">Sign Up</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default MyProfile;