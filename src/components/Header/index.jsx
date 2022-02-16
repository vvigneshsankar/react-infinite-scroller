import Avatar from "../../common/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUserGroup,
  faMessage,
  faBell,
  faBriefcase,
  faBorderAll,
} from "@fortawesome/free-solid-svg-icons";
import linkedInImage from "../../assets/images/linkedin.png";

import "./index.scss";

const Header = () => {
  return (
    <div className="header-container">
      <header>
        <nav>
          <div className="header-items">
            <div className="links">
              <a href="/" >
                <img src={linkedInImage} className="linked" alt="logo" />
              </a>
              <div className="search">
                <input placeholder="Search"></input>
              </div>
              <a href="/home" >
                <FontAwesomeIcon icon={faHouse} className="icon active" />
                Home
              </a>
              <a href="/network" >
                <FontAwesomeIcon
                  icon={faUserGroup}
                  className="icon"
                />
                Network
              </a>
              <a href="/message" >
                <FontAwesomeIcon icon={faMessage} className="icon" />
                Messaging
              </a>
              <a href="/notification" >
                <FontAwesomeIcon icon={faBell} className="icon" />
                Notifications
              </a>
              <a href="/jobs" >
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="icon"
                />
                Jobs
              </a>
              <a href="/work" >
                <FontAwesomeIcon
                  icon={faBorderAll}
                  className="icon"
                />
                Work
              </a>
            </div>
            <div className="avatar">
              <Avatar
                src="https://images.unsplash.com/profile-1617698123366-ff430f9f865aimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64"
                className="avatar__md"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
