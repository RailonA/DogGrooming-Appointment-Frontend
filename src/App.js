import { useEffect } from 'react';
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

  return (
    <div>
      { feedbackData.active
        ? (
          <Modal.Body
            backdrop="static"
            keyboard={false}
          >
            <Feedback type={feedbackData.type} feedback={feedbackData.feedback} />
          </Modal.Body>
        )
        : null }
      <Routes />
    </div>
  );
}

export default App;
