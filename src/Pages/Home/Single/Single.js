import React from "react";
import Cart from "../Cart/Cart";
import './Single.css';

const Single = () => {
  const singlePack = [
    { id: '1', title: 'Single Bed Booking Now', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, ullam nobis maxime consectetur pariatur fuga a et minima soluta.', price: 1500, img: 'https://i.ibb.co/NNXQrvW/single1.jpg' },
    { id: '2', title: 'Single Bed Booking Now', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, ullam nobis maxime consectetur pariatur fuga a et minima soluta.', price: 1700, img: ' https://i.ibb.co/XZBqLdF/single2.jpg' },
    { id: '3', title: 'Single Bed Booking Now', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, ullam nobis maxime consectetur pariatur fuga a et minima soluta.', price: 1600, img: 'https://i.ibb.co/g7MVyQx/single3.jpg' },
    { id: '4', title: 'Single Bed Booking Now', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, ullam nobis maxime consectetur pariatur fuga a et minima soluta.', price: 1800, img: 'https://i.ibb.co/vjJPPW9/single4.jpg' }
  ];
  return (
    <div id="single" className="container">

      <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Single Package Booking Now!</h1>
      <hr className="mt-2 mb-5" />
      <div className="single-container my-5">
        {
          singlePack.map( single => <Cart key={single.id} single={single}></Cart> )
        }
      </div>
    </div>
  );
};

export default Single;
