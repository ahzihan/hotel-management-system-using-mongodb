import React from 'react';
import useSingle from '../../../hooks/useSingle';

const ManageSingle = () => {
    const [ singlePack, setSinglePack ] = useSingle();

    const handleDelate = id => {
        const proceed = window.confirm( 'Are you sure?' );
        if ( proceed ) {
            const url = `http://localhost:5000/single/${ id }`;
            fetch( url, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    console.log( data );
                    const remaining = singlePack.filter( single => single._id !== id );
                    setSinglePack( remaining );
                } );
        }
    };
    return (
        <div>
            <h3>Manage Single Package</h3>
            {
                singlePack.map( single => <div>
                    <h4>{single.title} <button onClick={() => handleDelate( single._id )}>X</button></h4>
                </div> )
            }
        </div>
    );
};

export default ManageSingle;