import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AppointmentForm from '../../Components/appointmentform';

const mockStore = configureStore([]);

const initialState = {
  currentUser: {
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

describe('TripCard', () => {
  let store;
  configure({ adapter: new Adapter() });
  const services = [
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

    const wrapper = shallow(
      <Provider store={store}>
        <AppointmentForm serviceList={services} />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
