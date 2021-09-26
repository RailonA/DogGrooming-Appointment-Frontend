import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ServiceList from '../Components/serviceList';
import requestServiceInfo from '../Helpers/requests';

const ServicesPage = () => {
  const serviceData = useSelector((state) => state.services.servicesCollection);
  const { category } = useParams();
  const dispatch = useDispatch();

  console.log(category);
  console.log(serviceData);

  useEffect(() => {
    requestServiceInfo(dispatch);
  }, [dispatch]);

  return (
    <ServiceList services={serviceData} category={category} />
  );
};

export default ServicesPage;
