import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import requestServiceInfo from './Helpers/requests';
import Routes from './routes';
import Feedback from './Components/feedback';

function App() {
  const dispatch = useDispatch();
  const feedbackData = useSelector((state) => state.feedback);

  useEffect(() => {
    requestServiceInfo(dispatch);
  }, [dispatch]);

  const [errorState, setErrorOpen] = useState(feedbackData);

  const closeError = () => {
    setErrorOpen(false);
  };

  return (
    <div>
      { feedbackData.active
        ? (
          <Modal
            show={errorState}
            onHide={closeError}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>
              <Feedback type={feedbackData.type} feedback={feedbackData.feedback} />
            </Modal.Body>
          </Modal>
        )
        : null }
      <Routes />
    </div>
  );
}

export default App;
