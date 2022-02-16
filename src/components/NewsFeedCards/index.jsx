import React from "react";
import Avatar from "../../common/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faComment,faShare } from "@fortawesome/free-solid-svg-icons";

import "./index.scss";
import { dateFormatConverter } from "../../utils";

const NewsFeedCards = ({ feed }) => {
  return (
    <div className="user-card">
      {feed?.length > 0 &&
        feed.map((item, index) => (
          <div key={index}>
            <div className="user-info">
              <Avatar
                src={item.user.profile_image.medium}
                className="avatar__md"
              />
              <span className="user-name">{item.user.name}</span>
              <span className="settings">...</span>
              <div className="sub-info">
                Senior Talent Acquistion Research at IDN
              </div>
              <div className="updated-at">
                {dateFormatConverter(item.created_at)}
              </div>
            </div>
            <p>{item.user.bio}</p>
            <img className="post" src={item.urls.regular} alt="img" />
            <span className="feedback-icons">
              <FontAwesomeIcon icon={faHeart} className="icon like" />
              36{" "}
            </span>
            <span className="feedback-icons">
              <FontAwesomeIcon icon={faComment} className="icon" />
              12
            </span>

            <span className="feedback-icons">
              <FontAwesomeIcon icon={faShare} className="icon" />
              Share
            </span>
          </div>
        ))}
    </div>
  );
};

export default NewsFeedCards;
