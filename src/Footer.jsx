import React from 'react';

function Footer(props) {
  return (
    
    <div className='footer'>
<div className="icon">
  
<p className='p1'>© 2024 . All rights Sopey reserved.</p>
  <p className='p2'> Powered By Ankit kumar yadav </p><hr />
  <i class="fa-brands fa-instagram"></i>
  <i class="fa-brands fa-facebook"></i>
  <i class="fa-brands fa-github"></i>
  <i class="fa-brands fa-twitter"></i>
  <i class="fa-brands fa-linkedin"></i>
</div>

<div className="no">
    <h3>Contact us</h3>
    <p><i class="fa fa-phone" id="ic"></i>{props.phone}</p>
    <p><i class="fa fa-envelope" id="ic"></i>{props.email}</p>
   <p> <i class="fa-solid fa-location-dot" id="ic"></i>{props.add}</p>
</div>
    </div>
  )
}

export default Footer;
