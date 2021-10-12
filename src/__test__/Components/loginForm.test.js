import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import LoginForm from '../../Components/loginForm';

describe('LoginForm', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  store.dispatch = jest.fn();

  it('should match the snapshot', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <LoginForm onCancel={jest.fn} />
      </Provider>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
