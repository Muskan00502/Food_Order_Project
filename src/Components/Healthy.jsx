import React from 'react'
import HProduct from './HProduct'

import Turnip from '../assets/images/veg.png'
import Veg1 from '../assets/images/burgerr.png'

import Celery from '../assets/images/vegg2.png'
import Veg2 from '../assets/images/pizza.png'

import Amaranth from '../assets/images/vegg3.png'
import Veg3 from '../assets/images/icecream1.png'


function Healthy() {
  return (
    <div className="container-fluid px-4 py-5 healthy" >
      <h2 className='text-center display-4 mt-4 fw-bold'>
        Tasty Fast Food, Delivered Fresh and Fast to Your Doorstep!
     </h2>

     <div className='container'>

     <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
       <HProduct
           Image ={Veg1}
           Image2={Turnip}
           Title = "Quick Bites"
           
           Description = " Enjoy our irresistible burgers, crispy fries, and delightful nuggets, perfect for a quick and satisfying meal."
       
       />

<HProduct
           Image ={Veg2}
           Image2={Celery}
           Title = "Family Feast"
           Description = "Share a feast with family and friends with our pizzas, family-sized meals, and delicious sides."
       />

<HProduct
           Image ={Veg3}
           Image2={Amaranth}
           Title = "Sweet Treats"
           Description = "Indulge in our delicious desserts and shakes, the perfect end to your fast food meal."
       />

    </div>
        
    </div>
/</div>

  )
}

export default Healthy