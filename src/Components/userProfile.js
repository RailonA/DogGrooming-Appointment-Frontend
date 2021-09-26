import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { logoutAction } from '../Actions/user';
import LoginForm from './loginForm';
import SignUpForm from './signUpForm';

const UserProfile = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.currentUser);

  const [loginProcess, setLoginProcess] = useState(false);
  const [signUpProcess, setSignUpProcess] = useState(false);

  const openLogin = () => {
    setLoginProcess(true);
  };

  const closeLogin = () => {
    setLoginProcess(false);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const openSignUp = () => {
    setSignUpProcess(true);
  };

  const closeSignUp = () => {
    setSignUpProcess(false);
  };

  return (
    <div className="UserProfile">
      {loginProcess
        ? (
          <Modal
            show={loginProcess}
            onHide={closeLogin}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>
              <LoginForm onCancel={closeLogin} />
            </Modal.Body>
          </Modal>
        )
        : null }
      {signUpProcess
        ? (
          <Modal
            show={signUpProcess}
            onHide={closeSignUp}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Body>
              <SignUpForm onCancel={closeSignUp} />
            </Modal.Body>
          </Modal>
        )
        : null }
      {userData.username
        ? (
          <div>
            <span>{userData.username}</span>
            <Button variant="primary" type="button" name="logout" onClick={handleLogout}>LOGOUT</Button>
          </div>
        )
        : (
          <div>
            <Button variant="primary" onClick={openLogin} className="mr-2">LOGIN</Button>
            <Button type="button" variant="primary" onClick={openSignUp}>SIGN UP</Button>
          </div>
        )}
    </div>
  );
};

export default UserProfile;
