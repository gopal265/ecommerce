import React, { useEffect } from 'react';
import './end.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
// import confetti from './confetti'; // Import your confetti library (make sure it's installed)

function ConfirmPayment() {

  const navigate = useNavigate()
  useEffect(() => {
  
  }, []);

  return (
    <div>
      <div id="thanks">
        <img src="https://bit.ly/3J2FZ5A" alt="" />
      </div>
      <div id="confirm">
        <h3>
          Order Confirmed
          <br />
          You will soon receive a mail/SMS regarding confirmation of your recent order
        </h3>
      </div>
      <div onClick={()=>navigate('/')}>
        <div id="move">GO TO HOME</div>
      </div>
    </div>
  );
}

export default ConfirmPayment;
