import { useEffect, useState } from "react";

const useSingle = () => {

    const [ singlePack, setSinglePack ] = useState( [] );
    console.log( singlePack );
    useEffect( () => {
        fetch( 'http://localhost:5000/single' )
            .then( res => res.json() )
            .then( data => setSinglePack( data ) );
    }, [] );
    return [ singlePack, setSinglePack ];
};
export default useSingle;