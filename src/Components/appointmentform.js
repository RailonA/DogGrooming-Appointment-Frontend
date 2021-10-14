import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import { Button, Modal } from 'react-bootstrap';
import { requestAppointment } from '../Helpers/requests';
import '../Assets/styles/navBar.css';

const AppointmentForm = ({
  onCancel,
  serviceGroup,
  serviceSelected,
  setChooseService,
}) => {
  const [appointment, setApointment] = useState('');

  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  let serviceId;
  let date;

  const options = serviceGroup.map((services) => (
    <option value={services.id} key={services.id}>
      {services.petService}
    </option>
  ));

  const handleChange = (e) => {
    if (e.target.name === 'service-selection') {
      serviceId = e.target.value;
      setChooseService(serviceId);
    }
    if (e.target.name === 'appointmentDate') {
      date = e.target.value;
      setApointment(date);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestAppointment(dispatch, userData.id, serviceSelected, appointment, userData.token);
    e.target.reset();
    onCancel();
  };
  const disableWeekends = ({ date }) => (date.getDay() === 0 || date.getDay() === 6);

  const [value, onChange] = useState(new Date());

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Header>
        <Modal.Title>Regester Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p value={userData.id}>{userData.username}</p>
          <select name="service-selection" onChange={handleChange} value={serviceSelected}>
            {options}
          </select>
        </div>
        {/* <input
          id="appointment"
          type="datetime-local"
          name="appointmentDate"
          minDate="datetime-local"
          onChange={handleChange}
        /> */}
        <DateTimePicker
          onChange={onChange}
          format="MM-dd h a"
          value={value}
          minDate={new Date()}
          tileDisabled={disableWeekends}
          // timeFormat="HH:mm:ss"
          // timeConstraints={{
          //   hours: { min: 8, max: 18 },
          // }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" className="navBarButton">Confirm</Button>
        <Button type="button" className="navBarButton" onClick={onCancel}>Close</Button>
      </Modal.Footer>
    </form>
  );
};

AppointmentForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
  serviceGroup: PropTypes.string.isRequired,
  serviceSelected: PropTypes.string.isRequired,
  setChooseService: PropTypes.string.isRequired,
};

export default AppointmentForm;
