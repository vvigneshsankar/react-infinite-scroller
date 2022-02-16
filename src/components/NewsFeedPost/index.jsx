import React from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faCamera,
  faVideo,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const NewsFeed = () => {
  return (
    <div className="news-feed-container">
      <div className="post-box">
        <input
          placeholder="Write here. Add images or a vido for visual impact"
          type="text-area"
        ></input>
      </div>
      <div className="divider"> </div>
      <div className="post-buttons-container">
        <div className="post-buttons">
          <div>
            <button>
              <FontAwesomeIcon icon={faNewspaper} className="icon" />
              Article
            </button>
            <button>
              {" "}
              <FontAwesomeIcon icon={faCamera} className="icon" /> Image
            </button>
            <button>
              <FontAwesomeIcon icon={faVideo} className="icon" />
              Video
            </button>
          </div>
        </div>

        <div>
          <button className="send">
            <FontAwesomeIcon icon={faPaperPlane} className="icon app-color" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
