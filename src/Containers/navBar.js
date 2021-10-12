import { Link } from 'react-router-dom';
import UserProfile from '../Components/userProfile';
import '../Assets/styles/navBar.css';

const NavBar = () => (
  <div className="d-flex justify-content-between p-2 bg-dark text-white">
    <Link to="/" className="headerText">
      <h2>Pet Groomer</h2>
    </Link>
    <UserProfile />
  </div>
);

export default NavBar;
