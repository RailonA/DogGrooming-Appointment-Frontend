import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchService } from '../Actions/actionType';

const ServiceTable = () => {
  const serviceData = useSelector((state) => state.serviceReducer);
  const dispatch = useDispatch();

  console.log(serviceData);

  useEffect(() => {
    dispatch(fetchService);
  }, []);

  return (
    <div>
      <div>
        <h1>Service Table</h1>
        {serviceData.serviceCollection.map((services) => (
          <div key={services}>
            <h3>{services.all}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceTable;
