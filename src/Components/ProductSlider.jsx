import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Food1 from '../assets/images/f1.png'
import Food2 from '../assets/images/f6.png'
import Food3 from '../assets/images/f3.jpg'
import Food4 from '../assets/images/f4.png'
import Food5 from '../assets/images/ff5.png'
import Food6 from '../assets/images/f2.png'
import Food7 from '../assets/images/f7.png'
import SProduct from './SProduct';


function ProductSlider() {

    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div className='slider py-5'>
        
        <h1 className='text-center display-4 mt-4 fw-bold text-light'>
        Fast, Fresh, and Flavorful – <br />
        The Best Fast Food Delivered to You!
     </h1>
      
      <div className='container mt-5'>
        <Slider {...settings}>

            <div className='p-1'> 
              <SProduct
              Image={Food1}
              Description=" background-size: cover; /* Ensures the image covers the entire slider area */
    background-position: center; "
              />
            </div>

            <SProduct
              Image={Food2}
              Description=" background-size: cover; /* Ensures the image covers the entire slider area */
    background-position: center; "
              />
            <div className='p-1'>  
            <SProduct
              Image={Food3}
              Description=" background-size: cover; /* Ensures the image covers the entire slider area */
    background-position: center; "
              /> 
            </div>

            <div className='p-1'> 
            <SProduct
              Image={Food4}
              Description=" background-size: cover; /* Ensures the image covers the entire slider area */
    background-position: center; "
              />
            </div>

            <div className='p-1'> 
            <SProduct
              Image={Food5}
              Description=" background-size: cover; /* Ensures the image covers the entire slider area */
    background-position: center; "
              />
            </div>

            <div className='p-1'>
            <SProduct
              Image={Food6}
              Description=" background-size: cover; /* Ensures the image covers the entire slider area */
    background-position: center; "
              />
           </div>
           
            <div className='p-1'>
            <SProduct
              Image={Food7}
              Description=" background-size: cover; /* Ensures the image covers the entire slider area */
    background-position: center; "
              />    
           </div>
           

        </Slider>

      </div>

    </div>
  )
}

export default ProductSlider