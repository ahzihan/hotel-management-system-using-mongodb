import React from "react";
import Cart3 from "../Cart/Cart3";
import './Family.css';

const Family = () => {
  const familyPack = [
    { id: '1', title: 'Family Bed Booking Now', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, ullam nobis maxime consectetur pariatur fuga a et minima soluta.', price: 3500, img: 'https://i.ibb.co/SfFRFC0/family1.jpg' },
    { id: '2', title: 'Family Bed Booking Now', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, ullam nobis maxime consectetur pariatur fuga a et minima soluta.', price: 3800, img: 'https://i.ibb.co/dKTtQP0/family2.jpg' },
    { id: '3', title: 'Family Bed Booking Now', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci, ullam nobis maxime consectetur pariatur fuga a et minima soluta.', price: 4000, img: 'https://i.ibb.co/ZGw0Jx6/family3.jpg' }
  ];

  return (
    <div className="container">
      <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Family Package Booking Now!</h1>
      <hr className="mt-2 mb-5" />
      <div className="family-container my-5">
        {
          familyPack.map( family => <Cart3 key={family.id} family={family}></Cart3> )
        }
      </div>
    </div>
  );
};

export default Family;
