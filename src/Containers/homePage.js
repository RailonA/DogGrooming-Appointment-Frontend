import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ServiceList from '../Components/serviceList';
import requestServiceInfo from '../Helpers/requests';

const HomePage = () => {
  const serviceData = useSelector((state) => state.services.servicesCollection);
  const dispatch = useDispatch();

  useEffect(() => {
    requestServiceInfo(dispatch);
  }, [dispatch]);

  console.log(serviceData);

  return (
    <div>
      <ServiceList allServices={serviceData} />
    </div>
  );
};

export default HomePage;
