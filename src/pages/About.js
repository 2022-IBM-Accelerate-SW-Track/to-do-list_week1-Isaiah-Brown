import React, { Component } from 'react';
import "./About.css";
import about_me_pic from "../assets/about_me_pic.jpeg";

export default class About extends Component {
  render() {
    return (
      <div>
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {about_me_pic}
              alt="Profile Pic" 
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Isaiah Brown</div>
            <div className="brief_description">
              Salutations! 
              I'm a rising junior at Franklin & Marshall College.
              Awhile back my pet hamster "Joe" died. Very Sad!
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}