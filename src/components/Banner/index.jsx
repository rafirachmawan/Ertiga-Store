import React from "react";
import "./style.css";
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg";
import Img3 from "../../assets/img3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Aktifkan autoplay
    autoplaySpeed: 2000, // Kecepatan pergantian slide otomatis (dalam milidetik)
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={Img1} alt="Slide 1" />
      </div>
      <div>
        <img src={Img2} alt="Slide 2" />
      </div>
      <div>
        <img src={Img3} alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default index;
