import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ServiceList from '../Containers/serviceList';
import requestServiceInfo, { requestAppointmentInfo } from '../Helpers/requests';

const ServicesPage = () => {
  const serviceData = useSelector((state) => state.services.servicesCollection);
  const appointmentInfoData = useSelector((state) => state.appointments.appointmentsCollection);

  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    requestServiceInfo(dispatch);
    requestAppointmentInfo(dispatch);
  }, [dispatch]);

  return (
    <ServiceList services={serviceData} category={category} appointmentInfo={appointmentInfoData} />
  );
};

export default ServicesPage;
