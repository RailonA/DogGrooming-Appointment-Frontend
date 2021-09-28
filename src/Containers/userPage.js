import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUserInfo } from '../Helpers/requests';
import '../Assets/styles/userPage.css';

const UserPage = () => {
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    requestUserInfo(dispatch, userData.id);
  }, [dispatch]);

  console.log(userData.appointments.appointments);

  return (

    <div className="col-10 m-4">
      <div className="d-flex">
        <p className="mr-3  col-2 font-weight-bold">Username:</p>
        <p>{userData.username}</p>
      </div>
      { userData.appointments.appointments.map((appointments) => (
        <div className="col-10" key={appointments.id}>
          <div className="d-flex col-12">
            <p className="mr-3 col-3 font-weight-bold">Service Requested:</p>
            <p>
              {appointments.service.petService}
            </p>
          </div>
          <div className="d-flex col-12">
            <p className="mr-3 col-3 font-weight-bold">Service Description:</p>
            <p className="d-flex">
              {appointments.service.serviceDescription}
            </p>
          </div>
          <div className="d-flex col-12">
            <p className="mr-3 col-3 font-weight-bold">Service Price:</p>
            <p>{appointments.service.servicePrice}</p>
          </div>
          <div className="d-flex col-12">
            <p className="mr-3 col-3 font-weight-bold">Appointments Date:</p>
            <p>{appointments.date}</p>
          </div>
          <div className="d-flex col-12">
            <p className="mr-3 col-3 font-weight-bold">Appointments Was Created At :</p>
            <p>{appointments.created_at}</p>
          </div>
          <hr className=" col-12 tm-4 tb-4 mainHr" />
        </div>
      ))}
    </div>
  );
};

export default UserPage;
