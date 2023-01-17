import React from "react";
import { FaGenderless } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="inner-div">
        <div className="main-container">
          <div className="logo-header">
            <div className="circles">
              <FaGenderless className="circle-left" />
              <FaGenderless className="circle-right" />
              <h1>Ed-Circle.</h1>
            </div>

            <p>
              Top learning expiriences that create more talent in the world.
            </p>
          </div>
          <div className="ul-container">
            <div className="ul-container-first-pair">
              <ul>
                <li>Product</li>
                <li>Overview</li>
                <li>Features</li>
                <li>Solutions</li>
                <li>Tutorials</li>
                <li>Pricing</li>
              </ul>

              <ul>
                <li>Company</li>
                <li>About us</li>
                <li>Carrers</li>
                <li>
                  Press <span>New</span>
                </li>
                <li>News</li>
              </ul>
            </div>
            <div className="ul-container-second-pair">
              <ul>
                <li>Social</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Github</li>
                <li>Dribbble</li>
              </ul>

              <ul>
                <li>Legal</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="social-media-container">
          <div className="social-media-icons">
            <FaTwitter />
            <FaLinkedin />
            <FaFacebook />
            <FaGithub />
            <FaDribbble />
          </div>
          <p>&#169; 2022 Ed-Circle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
