import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';
import UserProfile from '../../Components/userProfile';
import store from '../../Store/store';

describe('NavBar', () => {
  it('should match the snapshot', () => {
    const wrapper = renderer.create(
      <div className="d-flex justify-content-between p-2 bg-dark text-white">
        <Provider store={store}>
          <BrowserRouter>
            <Link to="/" className="headerText">
              <h2>Pet Groomer</h2>
            </Link>
            <UserProfile />
          </BrowserRouter>
        </Provider>
      </div>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
