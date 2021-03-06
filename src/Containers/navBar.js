import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa';
import { GrLinkedinOption, GrGithub, GrTwitter } from 'react-icons/gr';
import UserProfile from '../Components/userProfile';
import '../Assets/styles/navBar.css';

const NavBar = () => (
  <div className="headerNavbar  p-2  text-white">
    <div className="flex-column col ">
      <div className="navGroupOne d-flex justify-content-between">
        <Link to="/" className="headerDiv">
          <h2 className="m-2 text-center headerText">Pet</h2>
          <h2 className="m-2 headerText">Groomer</h2>
        </Link>
        <UserProfile className="" />
      </div>
      <div className="d-flex justify-content-between  p-3 socialLinks col-12">
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/RailonA.ArtStudio">
            <p><FaFacebookF className="socialButton" /></p>
          </a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/railon-acosta/">
            <p><GrLinkedinOption className="socialButton" /></p>
          </a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://github.com/RailonA">
            <p><GrGithub className="socialButton" /></p>
          </a>
        </div>
        <div>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/RailonAcosta">
            <p><GrTwitter className="socialButton" /></p>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default NavBar;
