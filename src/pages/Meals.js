import React from 'react'
import './Meals.css'

function Meals() {
  return (
    <div className='menu'>
        <h2 className='intro1'>WELCOME TO ZEE'S CHOICE</h2>
        <h3 className='intro2'>Order your delicious homemade African delicacies</h3>
        <h4>PRE ORDER ONLY ----  DELIVERIES EVERY SATURDAYS </h4>
    <div className='image-container'>
       <div className='food-container'>
       <a href="https://imgur.com/FMKbdMc"><img src="https://i.imgur.com/FMKbdMc.png" title="source: imgur.com"  className='gizdodo' alt=''/></a>            
       <h4>GIZDODO - 25AED</h4>
        </div>
        <div className='food-container'>
        <a href="https://imgur.com/aAWJPwV"><img src="https://i.imgur.com/aAWJPwV.png" title="source: imgur.com"  className='fried' alt=''/></a>            
        <h4>FRIED RICE - 50AED</h4>
        </div>
        <div className='food-container'>
            <img src='https://lowcarbafrica.com/wp-content/uploads/2019/08/Efo-Riro-IG-2.jpg' className='efo' alt='efo'></img>
            <h4>EFO-RIRO - 60AED</h4>
        </div>
        <div className='food-container'>
        <img src='https://thumbs.dreamstime.com/b/nigerian-jollof-rice-chicken-thigh-roasted-thyme-143247305.jpg?w=768' className='jollof' alt='jollof'></img>    
        <h4>JOLLOF RICE - 50AED</h4>
        </div>
    </div>
    <div className='order'>
        <h3>For more enquiries or to place a pre-order, click:</h3>
        <a href='https://www.instagram.com/zees_choice_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
        <button className='order-btn'>PRE-ORDER</button>
        </a>
        <h3>Or Call: 0585056480</h3>
    </div>
    </div>
  )
}

export default Meals