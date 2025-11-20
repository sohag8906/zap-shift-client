import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons'; 

const MiniCard = () => {
    return (
<div className="px-6">
  <h2 className="font-bold text-3xl mb-6">How it Works</h2>

  <section className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6">
    
    {/* Card 1 */}
    <div className="card w-60 bg-base-100 card-xl shadow-md mx-auto">
      <div className="card-body">
        <FontAwesomeIcon icon={faTruck} className="text-xl mb-2" />
        <h2 className="card-title text-lg">Booking Pick & Drop</h2>
        <p className="text-sm">
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card w-60 bg-base-100 card-xl shadow-md mx-auto">
      <div className="card-body">
        <FontAwesomeIcon icon={faTruck} className="text-xl mb-2" />
        <h2 className="card-title text-lg">Cash On Delivery</h2>
        <p className="text-sm">
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="card w-60 bg-base-100 card-xl shadow-md mx-auto">
      <div className="card-body">
        <FontAwesomeIcon icon={faTruck} className="text-xl mb-2" />
        <h2 className="card-title text-lg">Delivery Hub</h2>
        <p className="text-sm">
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="card w-60  bg-base-100 card-xl shadow-md mx-auto ">
      <div className="card-body">
        <FontAwesomeIcon icon={faTruck} className="text-xl mb-2" />
        <h2 className="card-title text-lg">Booking SME & Corporate</h2>
        <p className="text-sm">
         From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>
    </div>

  </section>
</div>




    
       

    );
};

export default MiniCard;