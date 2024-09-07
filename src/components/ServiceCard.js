import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-gray-100 p-4 border border-gray-200 rounded-md shadow-md">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
