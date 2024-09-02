import { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { Modal, Button } from "react-bootstrap";
import { CiGlobe } from "react-icons/ci";
import f1 from "../assets/img/bg-habatour/27.png";
import f2 from "../assets/img/bg-habatour/28.png";
import f3 from "../assets/img/bg-habatour/29.png";
import f4 from "../assets/img/bg-habatour/30.png";
import f5 from "../assets/img/bg-habatour/31.png";

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
      mainTitle: "Trip ke 1",
      img: f1,
      title: "01 | Trip ke 1",
      description: "Trip 1",
    },
    {
      mainTitle: "Trip ke 2",
      img: f2,
      title: "02 | Trip ke 2",
      description: "Trip 2",
    },
    {
      mainTitle: "Trip ke 3",
      img: f3,
      title: "03 | Trip ke 3",
      description: "Trip 3",
    },
    {
      mainTitle: "Trip ke 4",
      img: f4,
      title: "04 | Trip ke 4",
      description: "Trip 4",
    },
    {
      mainTitle: "Trip ke 5",
      img: f5,
      title: "05 | Trip ke 5",
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
          <h2 className="fw-bold">Our <span>Trip</span></h2>
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
                <a href="https://instagram.com/mdkrtf" target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-light fw-bold">
                    Contact Us
                  </button>
                </a>
                <button
                  onClick={() => handleOpenModal(slide)}
                  className="fw-bold button-blur"
                  style={{color:"black"}}
                >
                  See More
                </button>
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
      <Modal show={openModal} onHide={() => setOpenModal(false)} centered>
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
      </Modal>
      </div>
    </section>
  );
}

export default Trip;
