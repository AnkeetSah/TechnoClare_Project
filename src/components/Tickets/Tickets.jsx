import React, { useState } from 'react';
import BackLink from '../BackLink';
import Bookings from'./Bookings'
const Tickets = () => {
  const [ticket, setticket] = useState(true);

  return (
    <div className='px-6 py-[95px] h-screen'>
      <BackLink />
      <h1 className='text-[#333333] font-sans font-extrabold text-3xl '>My Ticket</h1>
      {ticket ? (
        <div className='mt-2 h-full py-4 px-10'>
          <Bookings/>
        </div>
      ) : (
        <div className='h-full flex justify-center'>
          <img src="../../../assets/images/Frame 97.svg" className='h-[300px]' alt="Frame" />
        </div>
      )}
      
    </div>
  );
};

export default Tickets;
