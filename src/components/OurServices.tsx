"use client"; // This marks the component as a Client Component

import { useState, useEffect } from 'react';
import { fetchServices, ServiceFields } from '../lib/contentful';
import { EntrySkeletonType } from 'contentful';

const OurServices: React.FC = () => {
  const [services, setServices] = useState<EntrySkeletonType<ServiceFields>[]>([]);

  useEffect(() => {
    const getServices = async () => {
      const fetchedServices = await fetchServices();
      setServices(fetchedServices);
    };

    getServices();
  }, []);

  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.length > 0 ? (
            services.map((service) => (
              <div key={service.fields.slug} className="p-4 border rounded-lg shadow-sm bg-white">
                <h3 className="text-xl font-semibold mb-2">{service.fields.title}</h3>
                <p>{service.fields.description}</p>
              </div>
            ))
          ) : (
            <p>Loading services...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
