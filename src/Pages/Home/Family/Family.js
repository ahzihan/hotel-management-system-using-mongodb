import React, { useEffect, useState } from "react";
import Cart3 from "../Cart/Cart3";
import './Family.css';

const Family = () => {
  const [ familyPack, setFamilyPack ] = useState( [] );

  useEffect( () => {
    fetch( 'http://localhost:5000/family' )
      .then( res => res.json() )
      .then( data => setFamilyPack( data ) );
  }, [] );

  return (
    <div id="family" className="container">
      <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Family Package Booking Now!</h1>
      <hr className="mt-2 mb-5" />
      <div className="family-container my-5">
        {
          familyPack.map( family => <Cart3 key={family._id} family={family}></Cart3> )
        }
      </div>
    </div>
  );
};

export default Family;
