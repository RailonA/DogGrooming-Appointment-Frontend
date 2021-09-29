import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import UserPage from '../../Containers/userPage';

const mockStore = configureStore([]);

const initialState1 = {
  services: {
    serviceCollection: [
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
    ],
    loading: false,
  },
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

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
  useRouteMatch: () => ({ url: '/servicse/1' }),
}));

describe('User Page', () => {
  let store;
  afterAll(cleanup);

  it('renders required data if there is appointment made', () => {
    store = mockStore(initialState1);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserPage initialState1={initialState1} />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('Bath & Full Haircut')).toBeInTheDocument();
    expect(screen.getByText('76.00')).toBeInTheDocument();
  });
});
