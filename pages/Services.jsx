import Features from '@/components/services/Features';
import Hero from '@/components/services/Hero';
;
import React from 'react';
import FeaturesServices from './services/FeaturesServices';
import BookAppointment from '@/components/services/BookAppointment';
import UIDesigning from '@/components/services/UIDesigning';

const Services = () => {
  return (
    <>
      <Hero title="Services" />
      <Features/>
      <FeaturesServices/>
      <BookAppointment/>
      <UIDesigning/>
      
      
    </>
  );
};

export default Services;
