import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestUserInfo } from '../Helpers/requests';

const UserPage = () => {
  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    requestUserInfo(dispatch, userData.id);
  }, [dispatch]);

  console.log(userData.appointments.reserved_service);

  return (
    <div>
      <p>{userData.username}</p>
      { userData.appointments.reserved_service.map((appointments) => (
        <div key={appointments.id}>
          <div>
            Service Requested:
            {appointments.petService}
            <p className="d-flex">
              {appointments.petService}
            </p>
            <p>{appointments.servicePrice}</p>
          </div>
          <p>
            Appointments Date:
            {appointments.date}
          </p>
          <p>
            Appointments Was Created At :
            {appointments.created_at}
          </p>
        </div>
      ))}
    </div>
  );
};

export default UserPage;
