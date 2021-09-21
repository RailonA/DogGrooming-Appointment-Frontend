import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchServicesAction from '../Actions/services';
import ViewService from '../Components/viewService';

const HomePage = () => {
  const serviceData = useSelector((state) => state.services);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchServicesAction());
  }, [dispatch]);

  return (
    <>
      <div>
        {serviceData.loading
          ? <span>Loading...</span>
          : <ViewService allServices={serviceData} />}
      </div>
    </>
  );
};

export default HomePage;
