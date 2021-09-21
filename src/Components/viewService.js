import React from 'react';
import PropTypes from 'prop-types';

const ViewService = ({ allServices }) => (
  <div>
    {
        allServices.services.map((service) => (
          <p key={service.id}>{ service.category }</p>
        ))
      }
  </div>
);

// ViewService.propTypes = {
//   allServices: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

ViewService.propTypes = {
  allServices: PropTypes.arrayOf.isRequired,
};

export default ViewService;
