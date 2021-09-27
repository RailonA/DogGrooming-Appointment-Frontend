import { useSelector } from 'react-redux';

const UserPage = () => {
  const userData = useSelector((state) => state.currentUser);
  console.log(userData);
  return (
    <p>Test</p>
  );
};

export default UserPage;
