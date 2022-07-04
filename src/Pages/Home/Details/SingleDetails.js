import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleDetails = () => {
    const { singleId } = useParams();
    const [ single, setSingle ] = useState( {} );

    useEffect( () => {
        const url = `http://localhost:5000/single/${ singleId }`;
        fetch( url )
            .then( res => res.json() )
            .then( data => setSingle( data ) );
    }, [] );

    return (
        <div>
            <h2>Single Package Details: {single.title}</h2>
        </div>
    );
};

export default SingleDetails;