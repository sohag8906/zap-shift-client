import React from 'react';
import error from '../../assets/error-404.png'
import { NavLink } from 'react-router';
const Error = () => {
    return (
       <div>
        <div  className="flex justify-center items-center">
      <img src={error} alt="" />
        </div>
        <div className="flex justify-center mt-5">
    <NavLink to='/'>
  <button className='bg-primary  items-center text-center text-black font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-primary/80 transition'>
    Go Home
  </button>
</NavLink>
</div>

   </div>

    );
};

export default Error;