import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import useSingle from "../../../hooks/useSingle";
import Cart from "../Cart/Cart";
import './Single.css';

const Single = () => {
  const [ singlePack, setSinglePack ] = useSingle();

  return (
    <div id="single" className="container">

      <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Single Package Booking Now!</h1>
      <hr className="mt-2 mb-5" />
      <div className="single-container my-5">
        {
          singlePack.map( single => <Cart key={single._id} single={single}></Cart> )
        }
      </div>
    </div>
  );
};

export default Single;
