import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { requestAppointment } from '../Helpers/requests';

const AppointmentForm = ({
  onCancel,
  serviceGroup,
  serviceSelected,
  setChooseService,
}) => {
  const [appointment, setApointment] = useState('');

  const userData = useSelector((state) => state.currentUser);

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
    requestAppointment(userData.id, serviceSelected, appointment, userData.token);
  };

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
        <input
          id="appointment"
          type="datetime-local"
          name="appointmentDate"
          min="09:00"
          max="20:00"
          onChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="primary">Confirm</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>Close</Button>
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
