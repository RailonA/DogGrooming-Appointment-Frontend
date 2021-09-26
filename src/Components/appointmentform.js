import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { requestAppointment } from '../Helpers/requests';

const AppointmentForm = ({ onCancel }) => {
  // const [appointmentCred, setAppointmentCred] = useState({ petService: '', date: '', time: '' });
  const userData = useSelector((state) => state.currentUser);
  const [appointmentReserved, setAppointmentReserved] = useState('');
  let serviceId;

  const handleChange = (e) => {
    if (e.target.name === 'trip-date-selection') {
      serviceId = e.target.value;
      setAppointmentReserved(serviceId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestAppointment(userData.id, appointmentReserved, userData.token);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Header closeButton>
        <Modal.Title>Regester Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input name="petService" type="text" placeholder="Enter Username" onChange={handleChange} />
        <input
          id="appointment"
          type="datetime-local"
          name="partydate"
          min="09:00"
          max="18:00"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button type="button" variant="secondary" onClick={onCancel}>Close</Button>
      </Modal.Footer>
    </form>
  );
};

AppointmentForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default AppointmentForm;
