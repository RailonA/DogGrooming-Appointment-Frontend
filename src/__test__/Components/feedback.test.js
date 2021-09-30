import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

describe('Feedback', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  store.dispatch = jest.fn();
  const type = 'error';
  const feedbackMessage = 'Error text';

  it('should match the snapshot', () => {
    const wrapper = renderer.create(
      <Provider store={store}>
        <div feedback={feedbackMessage} type={type}>
          <div>
            <div
              className="modal-header"
            >
              <div
                className="modal-title h4"
              >
                Error
              </div>
            </div>
            <div
              className="modal-body"
            >
              <p>
                Error text
              </p>
            </div>
            <div
              className="modal-footer"
            >
              <button
                className="btn btn-secondary"
                disabled={false}
                onClick={[Function]}
                type="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Provider>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
