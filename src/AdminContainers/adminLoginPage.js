import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AdminLoginForm from '../AdminComponents/adminLoginForm';
import requestServiceInfo from '../Helpers/requests';

const adminLoginPage = () => {
//   const serviceData = useSelector((state) => state.services.servicesCollection);
  const dispatch = useDispatch();

  useEffect(() => {
    requestServiceInfo(dispatch);
  }, [dispatch]);

  return (
    <AdminLoginForm />
  );
};

export default adminLoginPage;
