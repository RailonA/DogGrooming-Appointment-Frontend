import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { loginAction } from '../Actions/user';

const LoginForm = ({ onCancel }) => {
  const [userCred, setUserCred] = useState({ username: '', password: '' });
  const dispatch = useDispatch();

  let username;
  let password;

  const handleChange = (e) => {
    if (e.target.name === 'username') {
      username = e.target.value;
      setUserCred((state) => ({ ...state, username }));
    }
    if (e.target.name === 'password') {
      password = e.target.value;
      setUserCred((state) => ({ ...state, password }));
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAction(userCred));
    e.target.reset();
    onCancel();
  };

  return (
    <form onSubmit={handleLogin}>
      <Modal.Header closeButton>
        <Modal.Title>LOG IN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input name="username" type="text" placeholder="Enter Username" onChange={handleChange} />
        <input name="password" type="password" placeholder="*****" onChange={handleChange} />
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" variant="primary">Log In</Button>
        <Button type="button" variant="secondary" onClick={onCancel}>Close</Button>
      </Modal.Footer>
    </form>
  );
};

LoginForm.propTypes = {
  onCancel: PropTypes.func.isRequired,
};

export default LoginForm;
