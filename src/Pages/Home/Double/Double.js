import React from "react";
import Cart2 from "../Cart/Cart2";
import './Double.css';

const Double = () => {
  const doublePack = [
    { id: '1', title: 'Double Bed Booking Now', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, ullam nobis maxime consectetur pariatur fuga a et minima soluta.', price: 2500, img: 'https://i.ibb.co/MRGtNCY/doble3.jpg' },
    { id: '2', title: 'Double Bed Booking Now', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, ullam nobis maxime consectetur pariatur fuga a et minima soluta.', price: 2800, img: 'https://i.ibb.co/YTy7g7v/double1.jpg' },
    { id: '3', title: 'Double Bed Booking Now', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, ullam nobis maxime consectetur pariatur fuga a et minima soluta.', price: 3000, img: 'https://i.ibb.co/3hfk6mJ/double2.jpg' }
  ];

  return (
    <div id="double" className="container">
      <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Double Package Booking Now!</h1>
      <hr className="mt-2 mb-5" />
      <div className="double-container my-5">
        {
          doublePack.map( double => <Cart2 key={double.id} double={double}></Cart2> )
        }
      </div>
    </div>
  );
};

export default Double;
