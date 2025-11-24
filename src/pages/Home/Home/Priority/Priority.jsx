import React from 'react';
import locationImg from '../../../../assets/location-merchant.png'
import Banner from './../../Banner/Banner';
const Priority = () => {
    return (
<div className="bg-[#03373D] w-11/12 mx-auto rounded-xl mt-5">
  <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16">

    {/* Left Text */}
    <div className="text-white md:w-1/2">
      <h2 className="text-3xl font-bold mb-4">Merchant and Customer Satisfaction is Our First Priority</h2>
      <p className="text-gray-200">
        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
      </p>
     <div className='flex gap-6'>
  <button className='bg-primary items-center text-center text-black font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-primary/80 transition mt-8'>
    Become a Merchant
  </button>

  <button className='bg-white text-black font-semibold px-6 py-2 rounded-xl shadow-md mt-8'>
    Earn with ZapShift Courier
  </button>
</div>

    </div>

    {/* Right Image */}
    <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
      <img src={locationImg} alt="" />
    </div>

  </div>
</div>



    );
};

export default Priority;