import React from 'react';
import tarck from '../../../assets/live-tracking.png'
import safe from '../../../assets/safe-delivery.png'


const Info = () => {
    return (
    <div className='mt-10 bg-gray-100 py-10'>
  
  <div className='flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-xl shadow-lg mb-10'>
    
    <img src={tarck} alt="Tracking" className='w-40 h-40 object-cover rounded-xl' />

   
    <div className='hidden md:block border-l-2 border-dashed border-gray-400 h-40'></div>

    
    <div>
      <h2 className='text-2xl font-bold mb-4'>Live Parcel Tracking</h2>
      <p className='text-gray-700 leading-relaxed'>
        Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
      </p>
    </div>
  </div>

  
  <div className='flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-xl shadow-lg mb-10'>
    
    <img src={safe} alt="Tracking" className='w-40 h-40 object-cover rounded-xl' />

    
    <div className='hidden md:block border-l-2 border-dashed border-gray-400 h-40'></div>

    
    <div>
      <h2 className='text-2xl font-bold mb-4'>Live Parcel Tracking</h2>
      <p className='text-gray-700 leading-relaxed'>
        Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
      </p>
    </div>
  </div>


  <div className='flex flex-col md:flex-row gap-8 items-center bg-white p-6 rounded-xl shadow-lg mb-10'>
    
    <img src={safe} alt="Tracking" className='w-40 h-40 object-cover rounded-xl' />

    
    <div className='hidden md:block border-l-2 border-dashed border-gray-400 h-40'></div>

    
    <div>
      <h2 className='text-2xl font-bold mb-4'>Live Parcel Tracking</h2>
      <p className='text-gray-700 leading-relaxed'>
        Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.
      </p>
    </div>
  </div>

  
  
</div>


    );
};

export default Info;