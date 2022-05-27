import React from 'react';
import { useForm } from 'react-hook-form';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        console.log(data);
        const url = `http://localhost:5000/part`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('user Updated susccessfully');
            })

    };

    return (
        <div className='container'>
            <h3 className='text-center text-primary font-bold text-2xl mt-5 mb-5'>Your iteam Well be add on Home Page</h3>

            <form className=' text-center' onSubmit={handleSubmit(onSubmit)}>
                <input className='p-5  mt-5 rounded-xl' placeholder='Name'  {...register("name", { required: true, maxLength: 15 })} /> <br />
                <input className='p-5  mt-5 rounded-xl' placeholder='Discription' {...register("description")} /> <br />
                <input className='p-5  mt-5 rounded-xl' placeholder='Avable Quantity' type="number" {...register("Aquantity")} /> <br />
                <input className='p-5  mt-5 rounded-xl' placeholder='Minimum Quantity' type="number" {...register("Mquantity")} /> <br />
                <input className='p-5  mt-5 rounded-xl' placeholder='Price' type="number" {...register("price")} /> <br />
                <input className='p-5  mt-5 rounded-xl' placeholder='Image Link' type="text" {...register("img")} /> <br />
                <input className='btn btn-primary mt-4' type="submit" value="Add Iteam" />
            </form>
        </div>
    );
};

export default AddItem;