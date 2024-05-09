import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'
export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
};
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <h3>THE ATHLETIC</h3>
        <input type="text" className="search-box" placeholder="search" />
        <div className="nav-items">
          <Link to="/">
            <img src="\imgs\images\img\home.PNG" className="icon" alt="" />
          </Link>
          <Link>
            <img src="\imgs\images\img\messenger.PNG" className="icon" alt="" />
          </Link>
          <Link to='/AddPost'>
            <img src="\imgs\images\img\add.PNG" className="icon" alt="" />
          </Link>
          {/* <img src="\imgs\images\img\explore.PNG" className="icon" alt="" /> */}
          <Link to='/Notifications'>
            <img src="\imgs\images\img\like.PNG" className="icon" alt="" />
          </Link>

          <div className="icon user-profile" alt=""  onClick={toggleMenu}>
          {showMenu && (<ul className="profile-dropdown-list">
          <li className="profile-dropdown-list-item">
                <Link to='/EditProfile' >
                  <i className="fa-regular fa-user"></i>
                  Edit Profile
                </Link>
              </li>
              <li className="profile-dropdown-list-item">
                <Link to="/Securite" >
                  <i className="fa-solid fa-chart-line"></i>
                  Securite
                </Link>
              </li>
              <li className="profile-dropdown-list-item">
                <Link to="/Settings">
                  <i className="fa-solid fa-sliders"></i>
                  Settings
                </Link>
              </li>
              <li className="profile-dropdown-list-item">
                <Link to="/Login">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  Log out
                </Link>
              </li>
            </ul>)}
          </div>
        </div>
      </div>
    </nav>

  );
}
