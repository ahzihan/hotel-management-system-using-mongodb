import React, { useEffect, useState } from "react";
import Cart2 from "../Cart/Cart2";
import './Double.css';

const Double = () => {
  const [ doublePack, setDoublePack ] = useState( [] );

  useEffect( () => {
    fetch( 'http://localhost:5000/double' )
      .then( res => res.json() )
      .then( data => setDoublePack( data ) );
  }, [] );

  return (
    <div id="double" className="container">
      <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Double Package Booking Now!</h1>
      <hr className="mt-2 mb-5" />
      <div className="double-container my-5">
        {
          doublePack.map( double => <Cart2 key={double._id} double={double}></Cart2> )
        }
      </div>
    </div>
  );
};

export default Double;
