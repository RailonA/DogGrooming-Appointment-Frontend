import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../Containers/homePage';

const mockStore = configureStore([]);

const initialState = {
  services: {
    tripsCollection: [
      {
        id: 1,
        category: 'dog',
        petService: 'Bath & Full Haircut',
        serviceDescription: 'A haircut and style. Service includes Bath services plus a full haircut or shave.',
        servicePrice: '76.00',
      },
      {
        id: 6,
        category: 'cat',
        petService: 'Bath & Full Haircut',
        serviceDescription: 'Our Cat Groom package keeps cats healthy and feeling great! Package includes an oxygen-infused bath, basic shampoo, blow dry, up to 15 minutes of brushing with minimal dematting, nail trim, ear cleaning and haircut.',
        servicePrice: '80.00',
      },
    ],
    loading: false,
  },
};

describe('Home Page', () => {
  let store;
  afterAll(cleanup);

  it('loads all category from store', () => {
    store = mockStore(initialState);
    store.dispatch = jest.fn();

    render(
      <Provider store={store}><BrowserRouter><Home /></BrowserRouter></Provider>,
    );

    expect(screen.getByText('Dog')).toBeInTheDocument();
    expect(screen.getByText('Cat')).toBeInTheDocument();
  });
});
