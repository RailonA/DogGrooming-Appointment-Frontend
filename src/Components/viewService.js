import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchService from '../API/request';

const ServiceTable = () => {
  const serviceData = useSelector((state) => state.serviceReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchService);
  }, []);

  return (
    <div>
      <div>
        <h1>Service Table</h1>
        {serviceData.map((service) => (
          <div key={service}>
            <h3>{service.all}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTable;
