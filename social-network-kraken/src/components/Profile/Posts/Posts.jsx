import React from "react";
import "../profile.css";
import avatarSmall from "../img/avatar-min.jpg";
// import Post from "./Post/Post";
function Posts(props) {
  return (
    <div className="post">
      <div className="post__intro">
        <img src={avatarSmall} alt="#" className="post__avatar" />
        <span className="post__name">Grisha Yermolay</span>
      </div>
        <div className="post__content">
            <p className="post__text">{props.message}</p>
        </div>
    </div>
  );
}

export default Posts;
