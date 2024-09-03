import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Modal, Button } from "react-bootstrap";
import { CiGlobe } from "react-icons/ci";
import day1Cover from "../assets/img/documentation/day1/cover.jpg";
import day2Cover from "../assets/img/documentation/day2/cover.jpg";
import day3Cover from "../assets/img/documentation/day3/cover.png";
import day4Cover from "../assets/img/documentation/day4/cover.png";
import day5Cover from "../assets/img/documentation/day5/cover.png";
import day6Cover from "../assets/img/documentation/day6/cover.png";
import day7Cover from "../assets/img/documentation/day7/cover.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Trip() {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({ title: "", description: "" });
  const sliderForRef = useRef(null);
  const sliderNavRef = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  useEffect(() => {
    setNav1(sliderForRef.current);
    setNav2(sliderNavRef.current);
  }, []);

  const slides = [
    {
      mainTitle: "Trip Day 1",
      img: day1Cover,
      title: "01 | Trip ziarah Bali-Lombok ke 1",
      description: "Trip 1",
    },
    {
      mainTitle: "Trip Day 2",
      img: day2Cover,
      title: "02 | Trip ziarah Bali-Lombok ke 2",
      description: "Trip 2",
    },
    {
      mainTitle: "Trip Day 3",
      img: day3Cover,
      title: "03 | Trip ziarah Bali-Lombok ke 3",
      description: "Trip 3",
    },
    {
      mainTitle: "Trip Day 4",
      img: day4Cover,
      title: "04 | Trip ziarah Bali-Lombok ke 4",
      description: "Trip 4",
    },
    {
      mainTitle: "Trip Day 5",
      img: day5Cover,
      title: "05 | Trip ziarah Bali-Lombok ke 5",
      description: "Trip 5",
    },
    {
      mainTitle: "Trip Day 6",
      img: day6Cover,
      title: "06 | Trip ziarah Bali-Lombok ke 6",
      description: "Trip 4",
    },
    {
      mainTitle: "Trip ke 7",
      img: day7Cover,
      title: "07 | Trip ziarah Bali-Lombok ke 7",
      description: "Trip 5",
    },
  ];

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

  const handleOpenModal = (slide) => {
    setModalData(slide);
    setOpenModal(true);
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

      <Slider {...settingsFor} className="slider-for">
        {slides.map((slide, index) => (
          <div key={index} className="image-wrapper position-relative">
            <img src={slide.img} alt="slide" className="img-fluid rounded w-100" />
            <CiGlobe className="position-absolute top-0 start-0 m-4 bg-white p-2 rounded-circle" size={48} />
            <div className="text-white position-absolute">
              <h4 style={{margin:"-40px 0 0 0"}}>{slide.mainTitle}</h4>
              <div className="d-flex gap-4">
                <a href="https://api.whatsapp.com/send?phone=6281213779357" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-light fw-bold">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <Slider {...settingsNav} className="slider-nav mt-4 pt-3">
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <img src={slide.img} alt="thumbnail" className="img-fluid rounded" />
          </div>
        ))}
      </Slider>

      {/* Modal Bootstrap */}
      {/* <Modal show={openModal} onHide={() => setOpenModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{modalData.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpenModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
      </div>
    </section>
  );
}

export default Trip;
