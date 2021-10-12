/* eslint-disable max-len */
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import requestServiceInfo from '../Helpers/requests';
import dogImg from '../Assets/images/dogGrooming.jpg';
import catImg from '../Assets/images/catGrooming.jpeg';
import '../Assets/styles/homePage.css';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    requestServiceInfo(dispatch);
  }, [dispatch]);

  return (
    <div className="col-12 justify-content-center">
      <h2 className="mainPageTitles mt-5 mb-5 text-center">What we do </h2>
      <div className="d-flex justify-content-center  mt-5 mb-3">
        <p className="text-center d-flex align-self-center col-8 ">If your pet requires a touch of magic to make sure it’s looking its best, look no further. With a wave of a magic wand (or doggie brush) We will give your pet the full treatment, turning even the untidiest of pets into show pet material!</p>
      </div>
      <div className="d-flex justify-content-around flex-md-row flex-column col-12 mb-5">
        <Link to="/category/dog" className="petCard col-xs-12 col-md-6">
          <div className="mainPageTitlesCard d-flex justify-content-center m-3 ">
            <h2 className="mainPageTitles p-2">Dog</h2>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <img src={dogImg} className="petCardImg col-10" alt="dogGrooming" />
          </div>
        </Link>
        <Link to="/category/cat" className="petCard col-xs-12 col-md-6">
          <div className="mainPageTitlesCard d-flex justify-content-center m-3">
            <h2 className="mainPageTitles p-2">Cat</h2>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <img src={catImg} className="petCardImg col-10" alt="catGrooming" />
          </div>
        </Link>
      </div>

    </div>
  );
};

export default HomePage;
