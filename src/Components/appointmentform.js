import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { DatePicker, TimePicker } from 'antd';
import { Button, Modal } from 'react-bootstrap';
import { requestAppointment } from '../Helpers/requests';
// import convertTime from '../Helpers/convertTime';
import '../Assets/styles/navBar.css';
import 'antd/dist/antd.css';

const AppointmentForm = ({
  onCancel,
  serviceGroup,
  serviceSelected,
  setChooseService,
}) => {
  const [appointmentDate, setApointmentDate] = useState('');
  const [appointmentTime, setApointmentTime] = useState('');

  const userData = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  let serviceId;
  let date;
  let time;

  const options = serviceGroup.map((services) => (
    <option value={services.id} key={services.id}>
      {services.petService}
    </option>
  ));

  const handleServiceChange = (e) => {
    if (e.target.name === 'service-selection') {
      serviceId = e.target.value;
      setChooseService(serviceId);
    }
  };

  const handleDatePickerChange = (e) => {
    date = e;
    console.log(date);
    setApointmentDate(date);
  };

  const handleTimePickerChange = (e) => {
    time = (e);
    console.log(time);
    setApointmentTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestAppointment(
      dispatch, userData.id, serviceSelected, appointmentDate, appointmentTime, userData.token,
    );
    e.target.reset();
    onCancel();
  };

  const disabledDates = (current) => (
    current < moment().startOf('day') || moment(current).day() === 0 || moment(current).day() === 6
  );

  return (
    <form onSubmit={handleSubmit}>
      <Modal.Header>
        <Modal.Title>Regester Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <p value={userData.id}>{userData.username}</p>
          <select name="service-selection" onChange={handleServiceChange} value={serviceSelected}>
            {options}
          </select>
        </div>
        <DatePicker
          format="YYYY-MM-DD"
          disabledDate={disabledDates}
          onChange={(e) => handleDatePickerChange(e)}
        />
        <TimePicker
          format="H a"
          use12Hours="true"
          showTime={{
            use12Hours: true,
            defaultValue: moment('00:00:00', 'HH:mm:ss'),
          }}
          disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23, 24]}
          onChange={(e) => handleTimePickerChange(e)}
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
  serviceSelected: PropTypes.number.isRequired,
  setChooseService: PropTypes.string.isRequired,
};

export default AppointmentForm;
