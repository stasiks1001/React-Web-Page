import React from "react";
import { FaGenderless } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { CiLaptop } from "react-icons/ci";
import { SlNotebook } from "react-icons/sl";
import { RiHandbagLine } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaHeadSideCough } from "react-icons/fa";
import { SiCodecov } from "react-icons/si";

import "./Navbar.scss";

function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav--first-half">
          <div className="circles">
            <FaGenderless className="circle-left" />
            <FaGenderless className="circle-right" />
            <h1>Ed-Circle.</h1>
          </div>
          <div className="nav--input-field">
            <input
              type="text"
              placeholder="Want to learn?"
              style={{ fontSize: "1.1rem" }}
            />
            <div className="nav--search-icon">
              <FiSearch
                style={{
                  fontSize: "1.8rem",
                  opacity: "0.5",
                  paddingLeft: ".5rem",
                }}
              />
            </div>

            <button>
              <h4 style={{ opacity: "0.8" }}>Explore</h4>
              <RiArrowDownSLine
                style={{ fontSize: "2.5rem", paddingLeft: "0.625rem" }}
              />
            </button>
          </div>
        </div>

        <div className="nav--second-half">
          <div>
            <ul>
              <li>Program</li>
              <li>Enterprise</li>
              <li>Universities</li>
            </ul>
          </div>

          <div>
            <li>Sign in</li>
            <button>Create free account</button>
          </div>
        </div>
      </nav>

      <main>
        <section className="header--text-image-wrapper">
          <section className="header--text-buttons-container">
            <div className="data-wrapper">
              <div className="circles-planet"></div>
              <div className="circles-under-h1">
                <div className="inner-circle-1">
                  <div className="inner-circle-2">
                    <div className="inner-circle-3"></div>
                  </div>
                </div>
              </div>
              <h1>
                Up Your <span>Skills</span>
              </h1>
              <h1>
                To <span>Advance</span> Your
              </h1>
              <h1>
                <span> Career </span>Path
              </h1>
              <p>
                Provides you with the latest online learning system and material
                that help you knoledge growing.
              </p>
              <div className="buttons">
                <button>Get Started</button>
                <button>Get free trial</button>
              </div>
            </div>

            <div className="three-icons-text">
              <div>
                <p>
                  <FaHeadSideCough className="fa-head-side-cough" />
                  Public Speaking
                </p>
              </div>
              <div>
                <p>
                  <RiHandbagLine className="ri-handbag-line" />
                  Career-Oriented
                </p>
              </div>
              <div>
                <p>
                  <HiOutlineLightBulb className="hi-outlineLight-bulb " />
                  Creative Thinking
                </p>
              </div>
            </div>

            <div className="three-icons-text-planet"></div>

            <div className="big-planet"></div>
          </section>

          <section className="header--image-container">
            <div className="image-background-circle">
              <img src="/girl.jpg" alt="girl" />

              <div className="online-courses">
                <div className="online_courses_cirlce">
                  <div className="online_courses_white_ball"></div>
                </div>
                <h3>5K+</h3>
                <p>Online Courses</p>
              </div>

              <div className="video-courses">
                <div>
                  <CiLaptop className="ci-laptop" />
                </div>
                <div>
                  <h3>2K+</h3>
                  <p>Video Courses</p>
                </div>
              </div>

              <div className="tutors">
                <div>
                  <SlNotebook className="si-notebook" />
                </div>
                <div>
                  <p>Tutors</p>
                  <h3>250+</h3>
                </div>
              </div>

              <div className="circles-planet"></div>
              <div className="circles">
               
                <div className="inner-circle-1">
                  <div className="inner-circle-2">
                    <div className="inner-circle-3"></div>
                  </div>
                </div>
              </div>

              <div className="big-planet"></div>
            </div>
          </section>
        </section>

        <section className="header--footer">
          <div className="collaboration">
            <h2>250+</h2>
            <p>Collaboration</p>
          </div>
          <div className="brands">
            <div className="first-pair-brands">
              <h1>duolingo</h1>
              <div>
                <SiCodecov className="si-codecov" />
                <p>Codecov</p>
              </div>
            </div>
            <div className="second-pair-brands">
              <img
                src="/usertesting-logo.png"
                alt="user-testing-logo-png"
                className="user-testing-logo"
               
              />

              <div className="magic-leap">
                <img
                  src="/magic-leap-logo.png"
                  alt="magic-leap-logo"
                  className="magic-leap-image"
                />
                <h1>magic leap</h1>
              </div>
            </div>
          </div>
        </section>
      </main>
    </header>
  );
}

export default Navbar;
