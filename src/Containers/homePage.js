import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import ServiceList from '../Components/serviceList';
import requestServiceInfo from '../Helpers/requests';
import dogImg from '../Assets/images/dogGrooming.jpg';
import catImg from '../Assets/images/catGrooming.jpg';
import '../Assets/styles/homePage.css';

const HomePage = () => {
  const serviceData = useSelector((state) => state.services.servicesCollection);
  const dispatch = useDispatch();

  useEffect(() => {
    requestServiceInfo(dispatch);
  }, [dispatch]);

  console.log(serviceData);

  return (
    <div>
      <h2>What we do </h2>
      <p>What we do </p>
      <div className="d-flex">
        <Link to="/category/dog">
          <p>Dog</p>
          <img src={dogImg} className="categoryCard col-6" alt="dogGrooming" />
        </Link>
        <Link to="/category/cat">
          <p>Cat</p>
          <img src={catImg} className="categoryCard col-6" alt="catGrooming" />
        </Link>
      </div>

    </div>
  );
};

export default HomePage;
