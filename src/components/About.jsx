import logoHabatour from "../assets/img/1. Habatour Logo Utama (P).png"
import elemenTriangleGreen from "../assets/img/elemen/triangle-green-right.png"
import elemenTriangleOrange from "../assets/img/elemen/triangle-orange-right.png"

function About(){
    return(
        <div className="about" id="about">
            <div className="elemen-triangle">
                <img src={elemenTriangleGreen} alt="" />
            </div>
            <div className="container">
                <div className="content">
                    <div className="content-logo">
                        <img src={logoHabatour} alt="" />
                    </div>
                    <div className="content-text">
                        <div className="title">
                            <h3>Tentang Kami</h3>
                        </div>
                        <p>Habatour adalah persembahan dari PT Abdi Solusi Wisata yang merupakan biro jasa yang menyediakan paket perjalanan religi seperti umroh, haji, ziarah, dan juga kegiatan Islami lainnya. </p>
                        <p>Habatour memberikan fasilitas premium yang akan membuat pengalaman ibadah Anda menenangkan, penuh berkah, dan meningkatkan rasa syukur kepada Allah Swt. </p>
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