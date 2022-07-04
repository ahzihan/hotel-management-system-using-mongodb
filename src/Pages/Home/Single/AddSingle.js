import React from 'react';
import { useForm } from "react-hook-form";

const AddSingle = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/single`;
        fetch( url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( data )
        } )
            .then( res => res.json() )
            .then( data => {
                console.log( data );
                alert( 'Successfully Added' );
            } );

    };
    return (
        <div>
            <h3 className='my-4 text-center text-primary'>Please Add Single</h3>
            <form className='w-50 mx-auto d-flex flex-column mb-5' onSubmit={handleSubmit( onSubmit )}>
                <input placeholder='Title' className='mb-2' {...register( "title", )} />
                <textarea placeholder='Description' className='mb-2' {...register( "description", )} />
                <input placeholder='Price' className='mb-2' type="number" {...register( "price" )} />
                <input placeholder='Image URL' className='mb-2' type="text" {...register( "img" )} />
                <input className='btn btn-primary' type="submit" value="Add Single" />
            </form>
        </div>
    );
};

export default AddSingle;