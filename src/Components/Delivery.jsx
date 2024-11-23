import React from 'react';
import Process1 from '../assets/images/processs1.png';
import Process2 from '../assets/images/processs2.png';
import Process3 from '../assets/images/processs3.png';

const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process" >
      <h2 className='text-center display-4 mt-4 fw-bold'>How Delivery Works</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">

        <div className="col px-5 text-center">
          <div className="mb-3">
            <br />
            <img src={Process1} className="w-50 h-50" alt="Order Placement" />
          </div>
          <h2>Order Placement</h2>
          <p>Place your order easily through our website or mobile app. Choose your favorite items and customize them to your liking.</p>
        </div>

        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process2} className="w-50 h-50" alt="Order Processing" />
          </div>
          <h2>Order Processing</h2>
          <p>Our team quickly processes your order, ensuring accuracy and quality. We prepare your food with the freshest ingredients.</p>
        </div>


        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process3} className="w-50 h-50" alt="Delivery" />
          </div>
          <h2>Delivery</h2>
          <p>Our delivery team ensures your food arrives hot and fresh at your doorstep. Enjoy fast and reliable delivery every time.</p>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
