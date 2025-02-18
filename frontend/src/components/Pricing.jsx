import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Pricing = () => {
  const pricing =[
    {
      imgurl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3
    },
    {
      imgurl: "/pricing.jpg",
      title: "HALF_YEARLY",
      price: 34000,
      length: 6
    },
    {
      imgurl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12
    }

  ]
  return (
<section className='pricing' id='plan'>
<h1>PowerHouse 24/7 FITNESS PLANS</h1>
<div className="wrapper">
  {
    pricing.map(element=>{
      return(
        <div className='card' key={element.title}>
          <img src={element.imgurl} alt={element.title} />
          <div className="title">
            <h1>{element.title}</h1>
            <h1>PACKAGE</h1>
            <h3>Rs {element.price}</h3>
            <p>For {element.length} Month</p>
          </div>
          <div className="description">
            <p>
              <FaCheck/> Equipment
            </p>
            <p>
              <FaCheck/> All Day Fre Training
            </p>
            <p>
              <FaCheck/> 24/7 Skilled Support
            </p>
            <p>
              <FaCheck/> 20 Day Freezing Option
            </p>
            <Link to={"/"}>Join now</Link>
          </div>
        </div>
      )
    })
  }
</div>
</section>
  )
}

export default Pricing