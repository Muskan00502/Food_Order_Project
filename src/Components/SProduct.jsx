import React from 'react'

function SProduct({Image,Description}) {
  return (
    
   
    <div class="card shadow-sm">
    <img src={Image} alt="" style={{height:"200px"}}/>

    <div class="card-body d-flex">   
            <p>{Description}</p>

    </div>
  </div>
 
  )
}

export default SProduct