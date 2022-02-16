import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faEdit
} from "@fortawesome/free-solid-svg-icons";

import Avatar from "../../common/Avatar";

const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="edit">
        <button>
        <FontAwesomeIcon icon={faEdit} className="icon" />
        </button>
      </div>
      <div className="info-justifier">
        <div className="avatar">
          <Avatar
            src="https://images.unsplash.com/profile-1617698123366-ff430f9f865aimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64"
            className="avatar__lg"
          />
        </div>
        <div className="user-name">Lucile Monotogermy</div>
        <div className="designation">UI / UX Designer</div>
        </div>
        <div className="info-justifier">
        <div className="linked-link">
        <FontAwesomeIcon icon={faLink} className="icon app-color" />
          <div className="link">
            {" "}
            https://www.linkedin.com/in/benjamin-grant-72381ujy3u
          </div>
        </div>
        </div>
        <div className="divider"></div>

        <div className="connections-wrapper">
        <div className="connections-container">
        <div className="figure">767</div>
        <div className="label">Connections</div>

        </div>
        <div className="vr"></div>
        <div className="connections-container">
        <div className="figure">60</div>
        <div className="label">Viewes</div>
        </div>
        </div>
        <div className="divider"></div>
        <div className="info-justifier">
        <div className="marketing">Free access exclusive tools &amp; insights</div>
        <div className="premium">
        <button>UPGRADE TO PREMIUM</button>
        </div>
        </div>

    </div>
  );
};

export default UserProfile;

