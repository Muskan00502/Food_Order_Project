import React from 'react'
import Product1 from '../assets/images/prodd1.png';
import Product2 from '../assets/images/piza.png';
import Product3 from '../assets/images/prod3.png';
import Product4 from '../assets/images/process3.png';
import Product5 from '../assets/images/veg.png';
import Product6 from '../assets/images/milkshake.png';

import Product from './Product';


function Products() {
  return (
    <div className='container py-5'>\
      <div className='d-flex justify-content-between'>
       <h3 className='text-success'>Customer Favorites</h3>
       <button className='btn btn-transparent fw-bold px-3 rounded-0 border-success '>All Products</button>
      </div>
       <div className='row mt-5'>
          <Product 
           Image={Product1}
           Name = "Burger"
           Price = "$49"
           Color="p1color"
          />

           <Product 
           Image={Product2}
           Name = "Pizza"
           Price = "$199"
           Color="p2color"
          />

          <Product 
           Image={Product3}
           Name = "Chicken Sandwich"
           Price = "$99"
           Color="p3color"
          />

        
         <Product 
           Image={Product4}
           Name = "White Sauce Pasta"
           Price = "$49"
           Color="p4color"
          />

         <Product 
           Image={Product5}
           Name = "Fried Chiken"
           Price = "$99"
           Color="p5color"
          />

          <Product 
           Image={Product6}
           Name = "Milk Shake"
           Price = "$199"
           Color="p6color"
          />




       </div>
      
    </div>
  )
}

export default Products