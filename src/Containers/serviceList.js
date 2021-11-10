import { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Modal } from 'react-bootstrap';
import AppointmentForm from '../Components/appointmentform';

import '../Assets/styles/serviceList.css';

const ServiceList = ({ services, category, appointmentInfo }) => {
  const [appointmnetProcess, setApointmnetProcess] = useState(false);
  const [chooseService, setChooseService] = useState('');

  const openAppointmentForm = (e, service) => {
    setApointmnetProcess(true);
    setChooseService(service.id);
  };
  const closeAppointmentForm = () => {
    setApointmnetProcess(false);
    setChooseService('');
  };

  const filteredServices = services.filter((service) => service.category === category);
  const filteredAppointmentInfo = appointmentInfo.filter((appointment) => appointment);
  console.log(filteredAppointmentInfo);
  return (
    <div className="container-fluid flex-column justify-content-center">
      {appointmnetProcess
        ? (
          <Modal
            show={appointmnetProcess}
            onHide={closeAppointmentForm}
            backdrop="static"
            keyboard={false}
            setChooseService={setChooseService}
          >
            <Modal.Body>
              <AppointmentForm
                onCancel={closeAppointmentForm}
                serviceGroup={filteredServices}
                serviceSelected={chooseService}
                filteredAppointmentInfo={filteredAppointmentInfo}
                setChooseService={setChooseService}
              />
            </Modal.Body>
          </Modal>
        )
        : null }
      {
        filteredServices.map((service) => (
          <Card
            onClick={(e) => openAppointmentForm(e, service)}
            key={service.id}
          >
            <table className="  m-3 col-10">
              <tbody className=" col-12">
                <tr className=" m-3 ">
                  <div className="m-3 col-12 flex-container justify-content-center">
                    <div className="col-12 d-flex justify-content-center">
                      <h4 className=" col-8  d-flex justify-content-center serviceCategoryTitle p-2">{ service.petService }</h4>
                    </div>
                    <hr className=" col-10 " />
                  </div>
                  <div className="d-flex m-4 col-10 justify-content-center serviceCategoryBody">
                    <td className=" col-9  text-center">{ service.serviceDescription }</td>
                    <td className="d-flex col-1 text-center justify-content-center align-self-center serviceCategoryPrice">
                      <p className="mr-2">$</p>
                      <p>{ service.servicePrice }</p>
                    </td>
                  </div>
                </tr>
              </tbody>
              <hr className=" col-12 " />
            </table>
          </Card>
        ))
      }
    </div>
  );
};

ServiceList.propTypes = {
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  appointmentInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ServiceList;
