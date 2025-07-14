import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Testimoni() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const testimonials = [
    {
      id: 1,
      text: `Kegiatan sholat berjamaah wajib dan sunahny (buat sy ini sprti miniatur umroh) MaasyaaAllaah. do'akan sy dpt ikut kmbali dlm kegiatan yg diadakan tim ASW hingga Allaah panggil utk Umroh bahkan Haji 🤲🤲....Aamiin ya Allaah`
    },
    {
      id: 2,
      text: `Habatour harus tetap mengutamakan kenyamanan jamaah baik alat transportasi, hotel dan makanan. Terima kasih Habatour, sukses selalu dan semakin banyak jamaah yang puas dengan pelayanannya. Berkah..berkah..berkah...`
    },
    {
      id: 3,
      text: `Alhamdulillah bagus .mudah2an kedepannya lebih bagus lagi`
    }
  ];

  return (
    <div className="testimoni">
      <div className="container">
        <div className="content-flex">
          <div className="title">
            <h4>Apa Kata Mereka?</h4>
          </div>
          <div className="content-quote">
            <Slider {...settings}>
              {testimonials.map((item) => (
                <div key={item.id} className="testi">
                  <p>{item.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
