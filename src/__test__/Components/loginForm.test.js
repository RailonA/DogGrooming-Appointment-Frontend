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
        <form>
          <div className="modal-header">
            <div
              className="modal-title h4"
            >
              Sign Up
            </div>
          </div>
          <div
            className="modal-body"
          >
            <div
              className="flex-column"
            >
              <input
                className="d-flex col-10"
                name="username"
                onChange={[Function]}
                placeholder="Enter Username"
                type="text"
              />
              <input
                className="d-flex col-10"
                name="password"
                onChange={[Function]}
                placeholder="Enter Password"
                type="password"
              />
              <input
                className="d-flex col-10"
                name="password_confirmation"
                onChange={[Function]}
                placeholder="Confirm Password"
                type="password"
              />
            </div>
          </div>
          <div
            className="modal-footer"
          >
            <button
              className="btn btn-primary"
              disabled={false}
              type="submit"
            >
              SIGN UP
            </button>
            <button
              className="btn btn-secondary"
              disabled={false}
              onClick={[Function]}
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </Provider>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
