import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { CiGlobe } from "react-icons/ci";
import day1Cover from "../assets/img/documentation/day1/cover.jpg";
import day2Cover from "../assets/img/documentation/day2/cover.jpg";
import day3Cover from "../assets/img/documentation/day3/cover.jpg";
import day4Cover from "../assets/img/documentation/day4/cover.png";
import day5Cover from "../assets/img/documentation/day5/cover.png";
import day6Cover from "../assets/img/documentation/day6/cover.png";

import umroh1 from "../assets/img/documentation/umroh/makkah1.png"
import umroh2 from "../assets/img/documentation/umroh/makkah2.png"
import umroh3 from "../assets/img/documentation/umroh/shalat.png"
import umroh4 from "../assets/img/documentation/umroh/trip-umroh1.png"
import umroh5 from "../assets/img/documentation/umroh/trip-umroh2.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trip() {
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [activeSlide, setActiveSlide] = useState('ziarah');

  const ziarahRef = useRef(null);

  useEffect(() => {
    setNav1(sliderForRef.current);
    setNav2(sliderNavRef.current);
  }, []);

  useEffect(() => {
    if (ziarahRef.current) {
      ziarahRef.current.focus();
    }
  }, []);

  const slides = {
    'ziarah':[
      {
        mainTitle: "Trip Day 1",
        img: day1Cover,
        desc: "Makam Sunan Gunung Jati, Cirebon"
      },
      {
        mainTitle: "Trip Day 2",
        img: day2Cover,
        desc: "Makam Syekh Kholil Bangkalan, Madura"
      },
      {
        mainTitle: "Trip Day 3",
        img: day3Cover,
        desc: "Masjid Al-Hidayah"
      },
      {
        mainTitle: "Trip Day 4",
        img: day4Cover,
        desc: "Makam Syekh Haji Mukmin, Denpasar"
      },
      {
        mainTitle: "Trip Day 5",
        img: day5Cover,
        desc: "Makam Tuan Guru Ibrahim"
      },
      {
        mainTitle: "Trip Day 6",
        img: day6Cover,
        desc: "Makam Batu Layar, Lombok"
      },
    ],
    'umroh':[
      {
        mainTitle: "Lengkapi ibadahmu",
        img: umroh1,
        desc: "Lengkapi ibadahmu dengan umroh"
      },
      {
        mainTitle: "Pengalaman di tanah suci",
        img: umroh2,
        desc: "Rasakan pengalaman ibadah anda di tanah suci"
      },
      {
        mainTitle: "Tingkatkan Shalat",
        img: umroh3,
        desc: "Rasakan pengalaman ibadah di tanah suci"
      },
      {
        mainTitle: "Kunjungi tempat otentik di tanah suci",
        img: umroh4,
        desc:"Kunjungi tempat otentik di tanah suci"
      },
      {
        mainTitle: "Kunjungi masjid di tanah suci",
        img: umroh5,
        desc:"Kunjungi masjid di tanah suci"
      },
    ],
  };

  const settingsFor = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    dots: true,
    asNavFor: nav2,
    ref: sliderForRef,
    responsive: [
      {
        breakpoint: 576, // Pada layar dengan lebar 768px atau kurang
        settings: {
          arrows: false,
        },
      }
    ],
  };

  const settingsNav = {
    slidesToShow: 4.34,
    slidesToScroll: 1,
    asNavFor: nav1,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    ref: sliderNavRef,
    responsive: [
      {
        breakpoint: 768, // Pada layar dengan lebar 768px atau kurang
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400, // Pada layar dengan lebar 768px atau kurang
        settings: {
          arrows: false,
          slidesToShow: 2.3,
        },
      }
    ],
  };

  return (
    <section
      id="portfolio"
      className="bg-light text-dark min-vh-100 d-flex flex-column align-items-center justify-content-center p-3"
    >
      <div className="container">
      <div className="row w-100 py-5">
        <div className="col-12 col-md-4 col-sm-12">
          <h2 className="fw-bold">Perjalanan <span>Kami</span></h2>
        </div>
        <div className="col-12 col-md-4 col-sm-12">
          <p>
            Rasakan pengalaman spiritual yang mendalam 
            saat mengunjungi tempat-tempat suci. Join us now!
          </p>
        </div>
        <div className="col-12 col-md-4 col-sm-12" style={{margin:"0 0 0 auto", textAlign:"end", alignSelf:"center"}}>
          <a href="https://instagram.com/habatour.co.id" target="_blank"><button className="btn" style={{padding:"12px 28px", borderRadius:"15px"}}>
            Join us Now!
          </button></a>
        </div>
      </div>

      <div className="filter">
          <div className="button-filter">
            <button 
              ref={ziarahRef}
              className={activeSlide === 'ziarah' ? 'active' : ''}
              onClick={() => setActiveSlide('ziarah')}
            >
              Ziarah
            </button>
            <button 
              className={activeSlide === 'umroh' ? 'active' : ''}
              onClick={() => setActiveSlide('umroh')}
            >
              Umroh
            </button>
          </div>
        </div>

      <Slider {...settingsFor} className="slider-for">
        {slides[activeSlide].map((slide, index) => (
          <div key={index} className="image-wrapper position-relative">
            <img src={slide.img} alt="slide" className="img-fluid rounded w-100" />
            <CiGlobe className="position-absolute top-0 start-0 m-4 bg-white p-2 rounded-circle" size={48} />
            <div className="text-white position-absolute">
              <h4 style={{margin:"-40px 0 0 0"}}>{slide.mainTitle}</h4>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settingsNav} className="slider-nav mt-4 pt-3">
        {slides[activeSlide].map((slide, index) => (
          <div key={index} className="px-2">
            <img src={slide.img} alt="thumbnail" className="img-fluid rounded" />
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}

export default Trip;
