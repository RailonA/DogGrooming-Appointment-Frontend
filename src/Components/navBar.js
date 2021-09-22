import UserProfile from './userProfile';

const NavBar = () => (
  <div className="d-flex justify-content-between p-2 bg-dark text-white">
    <p>Pet Groomer</p>
    <UserProfile />
  </div>
);

export default NavBar;
