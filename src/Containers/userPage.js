import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUserInfo } from '../Helpers/requests';

const UserPage = () => {
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    requestUserInfo(dispatch, userData.id);
  }, [dispatch]);

  console.log(userData.appointments);

  return (
    <div className="col-10 m-4">
      <div className="d-flex">
        <p className="mr-3  col-2 font-weight-bold">Username:</p>
        <p>{userData.username}</p>
      </div>
      { userData.appointments.reserved_service.map((appointments) => (
        <div key={appointments.id} className="m-4">
          <div className="d-flex">
            <p className="mr-3 col-2 font-weight-bold">Service Requested:</p>
            <p>
              {appointments.petService}
            </p>
          </div>
          <div className="d-flex">
            <p className="mr-3 col-2 font-weight-bold">Service Description:</p>
            <p className="d-flex">
              {appointments.serviceDescription}
            </p>
          </div>
          <div className="d-flex">
            <p className="mr-3 col-2 font-weight-bold">Service Price:</p>
            <p>{appointments.servicePrice}</p>
          </div>
          <div className="d-flex">
            <p className="mr-3 col-2 font-weight-bold">Appointments Date:</p>
            <p>{appointments.date}</p>
          </div>
          <div className="d-flex">
            <p className="mr-3 col-2 font-weight-bold">Appointments Was Created At :</p>
            <p>{appointments.created_at}</p>
          </div>
          <hr className=" col-12 tm-4 tb-4" />
        </div>
      ))}
    </div>
  );
};

export default UserPage;
