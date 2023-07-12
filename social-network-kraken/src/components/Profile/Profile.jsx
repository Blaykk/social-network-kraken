import React from "react";
import "./profile.css";
import avatar from "./img/avatar.jpg";
import avatarSmall from "./img/avatar-min.jpg";
import Posts from './Posts/Posts';

function Profile() {
    return(
        <div className="profile">
            <div className="user">
                <img src={avatar} alt="#" className="user__avatar" />
                <h2 className="user__name">Grisha Yermolay</h2>
            </div>

            <div className="publication">
                <input type="text" className="publication__area" />
                <button className="publication__submit">
                    Add Post
                </button>
                <div className="publication__row">
                    <Posts message="key"/>
                    <Posts />
                    <Posts />
                    <Posts />
                </div>
            </div>
        </div>
    )
}
export default Profile;