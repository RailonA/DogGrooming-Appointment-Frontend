import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchServicesAction from '../Actions/services';

import '../Assets/styles/serviceTable.css';

const ServiceList = () => {
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    fetchServicesAction(dispatch);
  }, [dispatch, category]);

  return (
    <div>
      <p>TEST</p>
    </div>

  );
};

export default ServiceList;
