import React from 'react';
import serviceImg from '../../../assets/service.png';

const Card2 = () => {
  return (
    <div className='bg-[#03373D] w-11/12 mx-auto mt-10 rounded-xl'>

      {/* Section Header */}
      <div className='flex flex-col items-center text-center px-4 py-16'>
        <img src={serviceImg} alt="service" className='w-24 h-24 mb-5' />
        
        <h2 className='text-white text-3xl font-bold mb-4'>
          Our Services
        </h2>

        <p className='text-white max-w-xl'>
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8 mb-20 px-4'>

        {/* Card 1 */}
        <div className='bg-white h-[250px] rounded-xl shadow flex flex-col items-center justify-center p-5 mt-2 mb-6 transition transform hover:-translate-y-2 hover:bg-primary'>
          <img src={serviceImg} alt="" />
          <h3 className='text-lg font-bold mt-8  mb-2'>Express  & Standard Delivery</h3>
          <p className='text-gray-600 text-center text-sm'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
        </div>

        {/* Card 2 */}
        <div className='bg-white h-[250px] rounded-xl shadow flex flex-col items-center justify-center p-5 mt-2 mb-6 transition transform hover:-translate-y-2 hover:bg-primary'>
          <img src={serviceImg} alt="" />
          <h3 className='text-lg font-bold mt-8  mb-2'>Real-Time Tracking</h3>
          <p className='text-gray-600 text-center text-sm'>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
        </div>

        {/* Card 3 */}
        <div className='bg-white h-[250px] rounded-xl shadow flex flex-col items-center justify-center p-5 mt-2 mb-6 transition transform hover:-translate-y-2 hover:bg-primary'>
          <img src={serviceImg} alt="" />
          <h3 className='text-lg font-bold mt-8  mb-2'>Fulfillment Solution</h3>
          <p className='text-gray-600 text-center text-sm'>We also offer customized service with inventory management support, online order processing, packaging, and after sales support..</p>
        </div>

        {/* Card 4 */}
        <div className='bg-white h-[250px] rounded-xl shadow flex flex-col items-center justify-center p-5 mt-2 mb-6 transition transform hover:-translate-y-2 hover:bg-primary'>
           <img src={serviceImg} alt="" />
          <h3 className='text-lg font-bold mt-8  mb-2'>Cash on Home Delivery</h3>
          <p className='text-gray-600 text-center text-sm'>00% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
        </div>

        {/* Card 5 */}
        <div className='bg-white h-[250px] rounded-xl shadow flex flex-col items-center justify-center p-5 mt-2 mb-6 transition transform hover:-translate-y-2 hover:bg-primary'>
          <img src={serviceImg} alt="" />
          <h3 className='text-lg font-bold mt-8  mb-2'>Corporate Service / Contract In Logistics</h3>
          <p className='text-gray-600 text-center text-sm'>Customized corporate services which includes warehouse and inventory management support.</p>
        </div>

        {/* Card 6 */}
        <div className='bg-white h-[250px] rounded-xl shadow flex flex-col items-center justify-center p-5 mt-2 mb-6 transition transform hover:-translate-y-2 hover:bg-primary'>
          <img src={serviceImg} alt="" />
          <h3 className='text-lg font-bold mt-8 mb-2'>Parcel Return</h3>
          <p className='text-gray-600 text-center text-sm'>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
        </div>

      </div>
    </div>
  );
};

export default Card2;
