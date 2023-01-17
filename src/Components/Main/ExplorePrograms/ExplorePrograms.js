import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";

import "./ExplorePrograms.scss";

export default function ExplorePrograms() {
  return (
    <section className="explore-programs">
      <div className="headers">
        <h3 style={{ color: "#9E77ED" }}>Explore Programs</h3>
        <h1>Our Most Popular Class</h1>
        <p
          style={{
            color: "#667085",
          }}
        >
          Let's join our famous class, the knoledge provided will definitely be
          useful for you.
        </p>
      </div>

      <div className="cards">
        <article className="card">
          <div className="inner-div">
            <div className="image">
              <img src="/UX-planet.jpg" alt="social-meadia-logo" />
              <div>
                <AiOutlineClockCircle style={{ opacity: "0.6" }} />
                <p style={{ opacity: "0.6" }}>08 hr 12 mins</p>
              </div>
            </div>
            <div className="rest-data">
              <h5>Design</h5>
              <h1>Figma UI UX Design..</h1>
              <FiArrowUpRight className="arrow-icon" />
              <div className="content">
                <p>
                  Use Figma to get a job in UI Design, User interface, User
                  Experience design.
                </p>
                <div className="stars-container">
                  <p style={{ color: "#7F56D9", fontWeight: "600" }}>4.3</p>
                  <div className="stars">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </div>
                  <p style={{ opacity: "0.6" }}>(16,325)</p>
                </div>
              </div>
              <div className="card-footer">
                <div className="image-names">
                  <div className="small-bottom-image">
                    <img src="/girl.jpg" alt="girl" />
                  </div>
                  <div>
                    <p>
                      <span> Jane Cooper </span>2001 Enrolled
                    </p>
                  </div>
                </div>
                <div className="price">
                  <p>$17.84</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="inner-div">
            <div className="image">
              <img src="/man-on-computer.jpg" alt="Hot air balloons" />
              <div>
                <AiOutlineClockCircle style={{ opacity: "0.6" }} />
                <p style={{ opacity: "0.6" }}>06 hr 30 mins</p>
              </div>
            </div>
            <div className="rest-data">
              <h5 style={{ color: "#9E77ED" }}>Design</h5>
              <h1>Learn with Shoaib</h1>
              <FiArrowUpRight className="arrow-icon" />
              <div className="content">
                <p>
                  Design Web Sites and Mobile apps that Your Users Love and
                  Return to Again.
                </p>
                <div className="stars-container">
                  <p style={{ color: "#7F56D9", fontWeight: "600" }}>3.9</p>
                  <div className="stars">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </div>
                  <p style={{ opacity: "0.6" }}>(832)</p>
                </div>
              </div>
              <div className="card-footer">
                <div className="image-names">
                  <div className="small-bottom-image">
                    <img src="girl.jpg" alt="girl" />
                  </div>
                  <div>
                    <p>
                      <span> Jenny Wilson </span>
                      2001 Enrolled
                    </p>
                  </div>
                </div>
                <div className="price">
                  <p>$8.99</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="card">
          <div className="inner-div">
            <div className="image">
              <img src="/interface.jpg" alt="Hot air balloons" />
              <div>
                <AiOutlineClockCircle style={{ opacity: "0.6" }} />
                <p style={{ opacity: "0.6" }}>01 hr 02 mins</p>
              </div>
            </div>
            <div className="rest-data">
              <h5 style={{ color: "#9E77ED" }}>Design</h5>
              <h1>Building User Interface..</h1>
              <FiArrowUpRight className="arrow-icon" />
              <div className="content">
                <p>
                  Learn how to apply User Expirience (UX) principles to your
                  website design.
                </p>
                <div className="stars-container">
                  <p style={{ color: "#7F56D9", fontWeight: "600" }}>4.2</p>
                  <div className="stars">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                  </div>
                  <p style={{ opacity: "0.6" }}>(125)</p>
                </div>
              </div>
              <div className="card-footer">
                <div className="image-names">
                  <div className="small-bottom-image">
                    <img src="girl.jpg" alt="girl" />
                  </div>
                  <div>
                    <p>
                      <span> Ester Howard </span>
                      2001 Enrolled
                    </p>
                  </div>
                </div>
                <div className="price">
                  <p>$11.70</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div className="three-dots">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <button>Explore All Programs</button>
    </section>
  );
}
