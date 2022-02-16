import Avatar from "../../common/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import "./index.scss";

const SideBar = () => {
  return (
    <div className="aside-container">
      <aside>
        <div className="heading-container">
          <div className="heading">People you may know</div>
        </div>
        <div className="divider" />
        <div className="suggestions-container">
          <div className="suggestions">
            <Avatar
              className="avatar__md"
              src="https://images.unsplash.com/profile-1642791208899-aa068161c098image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64"
            />
            <div className="bio">
              <span className="suggsted-user-name">Nina Doulas</span>
              <span className="designation">Recruiter-Orange</span>
            </div>
          </div>

          <div>
            <button>
              {" "}
              <FontAwesomeIcon icon={faPlusCircle} className="icon app-color" />
            </button>
          </div>
        </div>

        <div className="divider" />
        <div className="suggestions-container">
          <div className="suggestions">
            <Avatar
              className="avatar__md"
              src="https://images.unsplash.com/profile-1615498450185-bba48526cfb3image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64"            />
            <div className="bio">
              <span className="suggsted-user-name">Harry Caldwell</span>
              <span className="designation">
                Looking for Team Lead <br />
                Java Developer
              </span>
            </div>
          </div>
          <div>
            <button>
              {" "}
              <FontAwesomeIcon icon={faPlusCircle} className="icon app-color" />
            </button>
          </div>
        </div>
        <div className="divider" />
        <div className="suggestions-container">
          <div className="suggestions"> 
            <Avatar
              className="avatar__md"
              src="https://images.unsplash.com/profile-1638884262563-5f7e28183488?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64"
            />
            <div className="bio">
            <span className="suggsted-user-name">Hettie Patrick</span>
          <span className="designation">UI/UX Designer</span>
          </div>
      </div>
      <div>
          <button>
            {" "}
            <FontAwesomeIcon icon={faPlusCircle} className="icon app-color" />
          </button>
          </div>
        </div>
        <div className="divider" />
        <div className="suggestions-container">
          <div className="suggestions">
            <Avatar
              className="avatar__md"
              src="https://images.unsplash.com/profile-fb-1591676158-164d2ab64c0b.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64"
            />
            <div className="bio">
            <span className="suggsted-user-name">Fani Santigo</span>
            <span className="designation">SEO Specialist</span>
          </div>
          </div>
          <div>
          <button>
            {" "}
            <FontAwesomeIcon icon={faPlusCircle} className="icon app-color" />
          </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
