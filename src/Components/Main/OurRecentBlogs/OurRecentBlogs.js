import React from "react";

import "./OurRecentBlogs.scss";

export default function OurRecentBlogs() {
  return (
    <section className="our-recent-blogs">
      <h1>Our recent blogs</h1>
      <div className="cards">
        <div className="cards--first-and-second">
          <article className="first-card">
            <div className="first--second-card-inner-div">
              <div className="image">
                <img
                  src="/womanWorkingOnLaptop.jpg"
                  alt="womanWorkingOnLaptop"
                
                
                />
              </div>
              <div className="rest-card-data">
                <h3>November 16, 2014</h3>
                <h1>Three Pillars of User Delight</h1>
                <div className="content">
                  <p>
                    Delight can be exprienced viscerally, begaviourally, and
                    reflectively. A great dgn is...
                  </p>
                  <div className="buttons">
                    <button style={{
                        backgroundColor: "rgb(251, 241, 243)",
                        color: "rgb(189, 19, 93)",
                      }}>Research</button>
                    <button
                      style={{
                        backgroundColor: "rgb(230, 240, 230)",
                        color: "green",
                      }}
                    >
                      UI UX
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="second-card">
            <div className="first--second-card-inner-div">
              <div className="image">
                <img
                  src="/womanWorkingOnLaptop.jpg"
                  alt="womanWorkingOnLaptop"
                />
              </div>
              <div className="rest-card-data">
                <h3>September 24, 2017</h3>
                <h1>UX mapping Methods</h1>
                <div className="content">
                  <p>
                    Vusial-design principles can be aplied sonsistently
                    throughout the process of creatda
                  </p>
                  <div className="buttons">
                  <button style={{
                        backgroundColor: "rgb(251, 241, 243)",
                        color: "rgb(189, 19, 93)",
                      }}>Research</button>
                    <button
                      style={{
                        backgroundColor: "rgb(226, 239, 243)",
                        color: "rgb(20, 115, 248)",
                        border: "none",
                      }}
                    >
                      UI Design
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div className="cards--third">
          <article>
            <div className="image">
              <img
                src="/workplace.jpg"
                alt="workplace"
                className="responsive"
                width="600"
                height="400"
              />
            </div>
            <div className="cards-third--rest-card-data">
              <h3>March 13, 2014</h3>
              <h1>Agile Development Projects and Usability</h1>
              <div>
                <p>
                  Agile methods aim to overcome usability barriers in
                  traditional development, but post new threats to user
                  expireinece quality
                </p>
                <div className="buttons">
                  <button
                    style={{
                      backgroundColor: "#F4EBFF",
                      color: "#7F56D9",
                    }}
                  >
                    Programming
                  </button>
                  <button
                    style={{
                      backgroundColor: "rgb(170, 200, 253)",
                      color: "rgb(11, 97, 246)",
                    }}
                  >
                    Research
                  </button>
                  <button  style={{
                        backgroundColor: "rgb(251, 241, 243)",
                        color: "rgb(189, 19, 93)",
                      }}>Developments</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}


