import React from 'react';

interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  features,
  isFeatured = false,
}) => {
  return (
    <div
      className={`
        relative flex flex-col p-6 bg-white rounded-lg shadow-sm
        transition-all duration-300 ease-in-out
        hover:shadow-lg hover:-translate-y-1
        focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2
        ${isFeatured ? 'border-2 border-blue-500' : 'border border-gray-200'}
      `}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Popular
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{plan}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold text-gray-900">{price}</span>
        <span className="text-gray-500 ml-1">/month</span>
      </div>
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg
              className="w-5 h-5 text-green-500 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      
      <button
        className={`
          w-full py-2 px-4 rounded-md font-medium
          transition-colors duration-200
          ${isFeatured
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        `}
      >
        Get Started
      </button>
    </div>
  );
};

export default PricingCard; 