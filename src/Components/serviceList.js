import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/styles/serviceTable.css';

const ServiceList = ({ services, category }) => {
  const filteredServices = services.filter((service) => service.category === category);
  console.log(filteredServices);
  return (
    <div>
      {
        filteredServices.map((service) => (
          <div key={service.category}>
            <p>{service.petService}</p>
          </div>
        ))
      }
    </div>
  );
};

ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,

};

export default ServiceList;
