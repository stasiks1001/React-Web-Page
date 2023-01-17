import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./Tutors.scss";

export default function Tutors() {
  return (
    <section className="tutors">
      <div className="headers">
        <h3>Tutors</h3>
        <h1>Meet the Heroes</h1>
        <p>
          On Ed-Circle, instructors from all over the world instuct millions of
          students.We offer the knoledge and abilities.
        </p>
      </div>

      <div className="cards">
        <div className="first-pair">
          <article className="card">
            <div className="tutors-card-inner">
              <div className="image">
                <img src="/black-male.jpg" alt="black_male_image" />
              </div>
              <div className="rest-data">
                <h3>Marvin McKinney</h3>
                <p>Application Support Analyst Lead</p>
                <div className="content">
                  <p>
                    Former co-founder of Opendoor.Early staff at Spotify and
                    Clearbit.
                  </p>
                  <div className="icons">
                    <FaTwitter />
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="tutors-card-inner">
              <div className="image">
                <img src="/white-male-2.jpg" alt="white-male" />
              </div>
              <div className="rest-data">
                <h3>Henry McKinney</h3>
                <p>Director, Undergraduate Analytics and Planning</p>
                <div className="content">
                  <p>
                    Lead engineering teans at Figma, Pitch, and Protocol Labs.
                  </p>
                  <div className="icons">
                    <FaTwitter />
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="second-pair">
          <article className="card">
            <div className="tutors-card-inner">
              <div className="image">
                <img src="/white-male-1.jpg" alt="white-male" />
              </div>
              <div className="rest-data">
                <h3>Albert Flores</h3>
                <p>Carrer Educator</p>
                <div className="content">
                  <p>Former PM for Linear, Lambda School, and On Desk.</p>
                  <div className="icons">
                    <FaTwitter />
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="tutors-card-inner">
              <div className="image">
                <img src="/female.jpg" alt="female" />
              </div>
              <div className="rest-data">
                <h3>Jessy James</h3>
                <p>Co-op & Internships Program & Operations manager</p>
                <div className="content">
                  <p>
                    Former frondend dev for Linear, coinbase, and Postscript.
                  </p>
                  <div className="icons">
                    <FaTwitter />
                    <FaLinkedin />
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
