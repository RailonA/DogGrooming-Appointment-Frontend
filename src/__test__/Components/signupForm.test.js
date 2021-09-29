import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import SignUpForm from '../../Components/signUpForm';

describe('SignupForm', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  store.dispatch = jest.fn();

  it('should match the snapshot', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <SignUpForm onCancel={jest.fn} />
      </Provider>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
