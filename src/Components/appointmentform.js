import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { DatePicker } from 'antd';
import { Button, Modal } from 'react-bootstrap';
import { requestAppointment } from '../Helpers/requests';
import '../Assets/styles/navBar.css';
import 'antd/dist/antd.css';

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

  const handleServiceChange = (e) => {
    if (e.target.name === 'service-selection') {
      serviceId = e.target.value;
      console.log(serviceId);
      setChooseService(serviceId);
    }
  };

  const handleDatePickerChange = (e) => {
    date = e;
    setApointment(date);
    console.log(date);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    requestAppointment(dispatch, userData.id, serviceSelected, appointment, userData.token);
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
          format="YYYY-MM-DD HH"
          disabledDate={disabledDates}
          showTime={{
            use12Hours: true,
            defaultValue: moment('00:00:00', 'HH:mm:ss'),
          }}
          disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23, 24]}
          onChange={(e) => handleDatePickerChange(e)}
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
