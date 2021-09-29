import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        ? <Feedback type={feedbackData.type} feedback={feedbackData.feedback} />
        : null }
      <Routes />
    </div>
  );
}

export default App;
