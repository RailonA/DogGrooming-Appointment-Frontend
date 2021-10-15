import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
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

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i += 1) {
      result.push(i);
    }
    return result;
  }

  const disabledDates = (current) => (
    current < moment().startOf('day') || moment(current).day() === 0 || moment(current).day() === 6
  );

  // const disabledDates = (current) => {
  //   // Can not select days after today and before start Date
  //   const start = moment('2019-01-01', 'YYYY-MM-DD');
  //   return current < start || current > moment();
  // };

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
        <Space direction="vertical" size={12}>
          <DatePicker
            format="YYYY-MM-DD HH"
            disabledDate={disabledDates}
            showTime={{
              defaultValue: moment('00:00:00', 'HH:mm:ss'),
              disabledHours: () => range(8, 16).splice(8, 16),
            }}
          />
        </Space>
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
