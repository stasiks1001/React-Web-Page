import React from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";
import { BsGraphUp } from "react-icons/bs";

import "./OurServices.scss";

export default function OurServices() {
  return (
    <section className="our-services">
      <div className="headers">
        <h3>Our Services</h3>
        <h1>Fostering a playful & engaging learning environment</h1>
      </div>

      <div className="cards">
        <article
          className="card"
          style={{ backgroundColor: "#6941C6", border: "none" }}
        >
          <div className="icon">
            <h2>
              <HiOutlineDesktopComputer
                style={{
                  borderRadius: "8px",
                  padding: "7px",
                  background: "#FCFAFF",
                  color: "#6941C6",
                  fontSize: "4rem"
                }}
              />
            </h2>
            <p
              style={{
                paddingBottom: "10px",
                color: "#FCFAFF",
                fontWeight: "bold",
              }}
            >
              User Experience
            </p>
          </div>
          <p style={{ color: "#FCFAFF" }}>Lessons in design that cover the</p>
          <p style={{ color: "#FCFAFF" }}>most recent developments.</p>
          <h4>
            <p style={{ color: "#FCFAFF" }}>Learn More</p>
            <MdOutlineKeyboardArrowRight
              style={{
                color: "#FCFAFF",
                fontSize: "2.5rem",
                paddingLeft: ".7rem"
              }}
            />
          </h4>
        </article>

        <article className="card">
          <div className="icon">
            <h2>
              <TbHeartRateMonitor
                style={{
                  borderRadius: "8px",
                  padding: "7px",
                  background: "rgb(193, 223, 254)",
                  color: "rgb(86, 129, 247)",
                  fontSize: "4rem"
                }}
              />
            </h2>
            <p
              style={{
                paddingBottom: "10px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Web Development
            </p>
          </div>
          <p style={{ color: "#667085" }}>
            Classes in development that cover the
          </p>
          <p style={{ color: "#667085" }}>most recewnt advancments in web.</p>
          <h4>
            <p style={{ color: "#6941C6", fontWeight: "500" }}>Learn More</p>
            <MdOutlineKeyboardArrowRight
              style={{
                color: "#6941C6",
                fontSize: "2.5rem",
                paddingLeft: ".7rem"
              }}
            />
          </h4>
        </article>

        <article className="card">
          <div className="icon">
            <h2>
              <BsGraphUp
                style={{
                  borderRadius: "8px",
                  padding: "7px",
                  background: "rgb(251, 228, 232)",
                  color: "rgb(255, 94, 121)",
                  fontSize: "4rem"
                }}
              />
            </h2>
            <p
              style={{
                paddingBottom: "10px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Marketing
            </p>
          </div>
          <p style={{ color: "#667085" }}>
            Marketing coursres that cover the most
          </p>
          <p style={{ color: "#667085" }}>recent trends in marketing.</p>
          <h4>
            <p style={{ color: "#6941C6", fontWeight: "500" }}>Learn More</p>
            <MdOutlineKeyboardArrowRight
              style={{
                color: "#667085",
                fontSize: "2.5rem",
                paddingLeft: ".7rem"
                
              }}
            />
          </h4>
        </article>
      </div>

      <div className="three-dots">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}
