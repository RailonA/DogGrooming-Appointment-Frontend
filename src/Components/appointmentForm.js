import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { DatePicker, TimePicker } from 'antd';
import { Button, Modal } from 'react-bootstrap';
import { requestAppointment } from '../Helpers/requests';
import '../Assets/styles/navBar.css';
import 'antd/dist/antd.css';

const AppointmentForm = ({
  onCancel,
  serviceGroup,
  serviceSelected,
  setChooseService,
  allAppointmentInfo,
}) => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [disableTimes, setDisableTimes] = useState([]);

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

  const mainDisableTimes = [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23, 24];
  const newDisableTimes = mainDisableTimes.concat(disableTimes);

  const handleDatePickerChange = (e) => {
    date = e;
    setAppointmentDate(date);
    const myDateFormat = 'YYYY-MM-DD';
    const myTimeFormat = 'HH';
    const myDateString = moment(date).format(myDateFormat);
    const newDis = [];

    allAppointmentInfo.forEach((appointmentData) => {
      if (appointmentData.date === myDateString) {
        const hr = parseInt(moment(appointmentData.time).format(myTimeFormat), 10);
        newDis.push(hr, hr + 1);
      }
    });
    setDisableTimes(newDis);
  };

  const handleTimePickerChange = (e) => {
    time = (e);
    setAppointmentTime(time);
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
          disabledHours={() => newDisableTimes}
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
  allAppointmentInfo: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default AppointmentForm;
