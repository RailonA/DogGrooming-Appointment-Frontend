import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { Button, Modal } from 'react-bootstrap';

const mockStore = configureStore([]);

const initialState = {
  user: {
    id: 1,
    username: 'railon',
    token: 'TOKEN',
    appointments: {
      appointments: [
        {
          id: 1,
          date: '2021-09-29T18:53:00.000Z',
          user_id: 1,
          service_id: 1,
          created_at: '2021-09-27T22:53:50.968Z',
          service: {
            id: 1,
            category: 'dog',
            petService: 'Bath & Full Haircut',
            serviceDescription: 'A haircut and style. Service includes Bath services plus a full haircut or shave.',
            servicePrice: '76.00',
          },
        },
      ],
    },
    loading: false,
  },
};

describe('Appointment Form', () => {
  let store;
  const options = [
    {
      id: 1,
      category: 'dog',
      petService: 'Bath & Full Haircut',
      serviceDescription: 'A haircut and style. Service includes Bath services plus a full haircut or shave.',
      servicePrice: '76.00',

    },
    {
      id: 2,
      category: 'dog',
      petService: 'Bath & Full Haircut with FUR minator',
      serviceDescription: 'Helps reduce shedding. Package includes Bath and Haircut services plus Low-Shed Shampoo, DeShedding Solution and Up to 20 Minutes Brushing with FURminator tool.',
      servicePrice: '91.00',

    },
  ];

  it('should match the snapshot', () => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    const wrapper = renderer.create(
      <Provider store={store}>
        <Modal.Header>
          <Modal.Title>Regester Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <p>{initialState.username}</p>
            <select name="service-selection">
              {options.petService}
            </select>
          </div>
          <input
            id="appointment"
            type="datetime-local"
            name="appointmentDate"
            min="09:00"
            max="20:00"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" variant="primary">Confirm</Button>
          <Button type="button" variant="secondary">Close</Button>
        </Modal.Footer>
      </Provider>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
