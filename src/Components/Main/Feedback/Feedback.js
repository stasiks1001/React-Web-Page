import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGenderless } from "react-icons/fa";
import React from "react";

import "./Feedback.scss";

const Feedback = ({ images }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
  };
  return (
    <section className="feedback-container">
      <div className="circles">
        <FaGenderless className="circle-left" />
        <FaGenderless className="circle-right" />
        <h1>Ed-Circle.</h1>
      </div>

      <div className="img-slider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id} className="name-occupation">
              <p
                style={{
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                {item.p}
              </p>
              <img src={item.src} alt={item.alt} />
              <p
                style={{
                  textAlign: "center",
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  textAlign: "center",
                  opacity: "0.6",
                }}
              >
                {item.occupation}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default Feedback;
