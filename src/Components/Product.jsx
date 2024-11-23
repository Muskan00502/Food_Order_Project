import React from 'react';

function Product({ Image, Name, Price, Color }) {
  return (
    <div className='col-12 col-md-4'>
      <div className='p-1'>
        <div className={`border shadow-sm p-3 ${Color}`}>
          <img src={Image} alt="" style={{ height: "200px" }} />
          <h3>{Name}</h3>
          <p>{Price}</p>
          <button className='btn bg-white w-100 rounded-0'>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
