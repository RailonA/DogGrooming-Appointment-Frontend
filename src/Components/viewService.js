import React from 'react';
import PropTypes from 'prop-types';
import '../Assets/styles/serviceTable.css';

const ViewService = ({ allServices }) => (
  <div className="col-12 d-flex justify-content-center">
    <div className="col-10 flex-column">

      {
        allServices.services.map((service) => (
          <div key={service.id}>
            <table>
              <tbody>
                <tr className=" col-12 m-3">
                  <div className="m-3">
                    <td className=" col-2  text-center">{ service.petService }</td>
                    <hr className=" col-10 " />
                  </div>
                  <div className="d-flex m-4">
                    <td className=" col-9  text-center">{ service.serviceDescription }</td>
                    <td className="d-flex col text-center align-self-center">
                      <p className="mr-2">$</p>
                      <p>{ service.servicePrice }</p>
                    </td>
                  </div>
                </tr>
              </tbody>
            </table>
            <hr className=" col-12 " />
          </div>
        ))
      }
    </div>
  </div>
);

ViewService.propTypes = {
  allServices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ViewService;
