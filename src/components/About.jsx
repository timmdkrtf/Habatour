import logoHabatour from "../assets/img/1. Habatour Logo Utama (P).png";
import elemenTriangleGreen from "../assets/img/elemen/triangle-green-right.png";
import elemenTriangleOrange from "../assets/img/elemen/triangle-orange-right.png";

function About() {
  return (
    <div className="about" id="about">
      <div className="elemen-triangle">
        <img src={elemenTriangleGreen} alt="" />
      </div>
      <div className="container">
        <div className="content">
          <div className="video-youtube">
            <div className="title">
              <h3>Lihat Perjalanan Kami</h3>
            </div>
            <div className="video-list d-flex flex-column gap-3">
              <div className="video d-flex gap-3">
                <iframe
                  width="150"
                  height="85"
                  src="https://www.youtube.com/embed/cQw7Qc27WB0?si=fTOlyrE7x-bUkEGE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <span>
                  Ziarah Wali Garut Bersama Habatour 19 Juli 2025
                </span>
              </div>
              <div className="video d-flex gap-3">
                <iframe
                  width="150"
                  height="85"
                  src="https://www.youtube.com/embed/SEc4nYNpp8w?si=j6u7izTrmbRIrHNI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <span>
                    Ziarah Banten Habatour Bersama Ustaz Uki 28-29 September 2024
                </span>
              </div>
              <div className="video d-flex gap-3">
                <iframe
                  width="150"
                  height="85"
                  src="https://www.youtube.com/embed/0uQ2jBrdVko?si=k3g1re0BKzDHvNJd"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <span>
                    Ziarah Jam'an Marhuman Indonesia Majlis Al-Ihya Bogor Bersama Habatour 24-26 Januari 2025
                </span>
              </div>
            </div>
            <div className="btn-more">
              <hr />
              <a
                className="btn"
                href="https://www.youtube.com/@Habatour"
                target="_blank"
              >
                Lihat Selengkapnya
              </a>
            </div>
          </div>
          <div className="content-text">
            <div className="title">
              <h3>Tentang Kami</h3>
            </div>
            <p>
              Habatour adalah persembahan dari PT Abdi Solusi Wisata yang
              merupakan biro jasa yang menyediakan paket perjalanan religi
              seperti umrah, ziarah, dan juga kegiatan Islami lainnya.{" "}
            </p>
            <p>
              Habatour memberikan fasilitas premium yang akan membuat pengalaman
              ibadah Anda menenangkan, penuh berkah, dan meningkatkan rasa
              syukur kepada Allah Swt.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="line">
        <div className="line-primary"></div>
        <div className="line-secondary"></div>
      </div>
    </div>
  );
}

export default About;
