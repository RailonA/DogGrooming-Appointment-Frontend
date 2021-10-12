import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption, GrGithub, GrTwitter } from 'react-icons/gr';
import UserProfile from '../Components/userProfile';
import '../Assets/styles/navBar.css';

const NavBar = () => (
  <div className="headerNavbar flex-column h-100 justify-content-between p-2 bg-dark text-white">
    <Link to="/" className="headerText">
      <h2 className="m-2">Pet Groomer</h2>
    </Link>
    <UserProfile />
    <div className="d-flex justify-content-between p-3 socialLinks col-12">
      <div>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/RailonA.ArtStudio">
          <p><FaFacebookF /></p>
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/railon-acosta/">
          <p><GrLinkedinOption /></p>
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://github.com/RailonA">
          <p><GrGithub /></p>
        </a>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/RailonAcosta">
          <p><GrTwitter /></p>
        </a>
      </div>
    </div>
  </div>
);

export default NavBar;
