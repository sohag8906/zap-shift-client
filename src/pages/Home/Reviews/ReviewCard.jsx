import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
  const { userName, user_photoURL, review: testimonial } = review;

  return (
    <div className="max-w-sm bg-white rounded-xl shadow p-6 border">
      {/* Quote Icon */}
      <div className="text-teal-500 text-3xl mb-4">
        <FaQuoteLeft />
      </div>

      {/* Review Text */}
      <p className="mb-4">
        {testimonial}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed mt-6 mb-4"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        
        {/* User Image */}
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
          <img 
            src={user_photoURL} 
            alt={userName} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Role */}
        <div>
          <h4 className="font-bold text-gray-900">{userName}</h4>
          <p className="text-sm ">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
