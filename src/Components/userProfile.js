import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
        ? <LoginForm onCancel={closeLogin} />
        : null }
      {signUpProcess
        ? <SignUpForm onCancel={closeSignUp} />
        : null }
      {userData.username
        ? (
          <div>
            <span>{userData.username}</span>
            <button type="button" name="logout" onClick={handleLogout}>LOGOUT</button>
          </div>
        )
        : (
          <div>
            <button type="button" onClick={openLogin}>LOGIN</button>
            <button type="button" onClick={openSignUp}>SIGN UP</button>
          </div>
        )}
    </div>
  );
};

export default UserProfile;
