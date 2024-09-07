import React from 'react';
import ServiceCard from '../components/ServiceCard';

const servicesData = [
  { title: 'Wealth Management', description: 'Tailored wealth services.' },
  { title: 'Insurance Solutions', description: 'Customized insurance plans.' },
];

const Services = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
