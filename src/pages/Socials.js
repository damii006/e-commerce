import React from 'react'
import './Socials.css'

function Socials() {
  return (
    <div className='body'>        
      <h2 className='text_shadows'>Socials</h2>
      <div className='buttons'>
        <a href='https://www.instagram.com/z_zainab_j?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
          <button className='social-btn'><i class="fa fa-instagram" aria-hidden="true"></i> @z_zainab_j</button>
        </a>
        <a href='https://youtube.com/@z_zainab_j?si=VKWss40PsEtPqk-g'>
          <button className='social-btn'>Youtube - @z_zainab_j</button>
        </a>
        <a href='https://www.linkedin.com/in/zainab-jimoh-b87175182?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'>
          <button className='social-btn'>LinkedIn - Zainab Jimoh  Adejumoke</button>
        </a>
        <a href='https://www.tiktok.com/@z_zainab_j?is_from_webapp=1&sender_device=pc'
        >
          <button className='social-btn'>Tiktok - @z_zainab_j</button>
        </a>
        <a href='https://benable.com/z_zainab_j'>
          <button className='social-btn'>Benable - Zainab Jimoh</button>
        </a>

      </div>
      </div>
  )
}

export default Socials