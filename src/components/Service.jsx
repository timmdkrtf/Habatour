import ITranport from "../assets/img/icon-layanan/Public Transportation.svg"
import IGlobe from "../assets/img/icon-layanan/Around the Globe.svg"
import IBedroom from "../assets/img/icon-layanan/Bedroom.svg"
import IMosque from "../assets/img/icon-layanan/Mosque.svg"
import IView from "../assets/img/icon-layanan/National Park.svg"
import IRamadhan from "../assets/img/icon-layanan/Ramadan.svg"

function Service(){
    return(
        <div className="service" id="service">
            <div className="container">
                <div className="title">
                    <h3>Layanan <span>Kami</span></h3>
                    <p>Nikmati perjalanan Islami, tanpa ribet.</p>
                </div>
                <div className="daftar-layanan">
                    <div className="card-layanan">
                        <img src={ITranport} alt="" />
                        <p>Transportasi</p>
                    </div>
                    <div className="card-layanan">
                        <img src={IGlobe} alt="" />
                        <p>Wisata Religi</p>
                    </div>
                    <div className="card-layanan">
                        <img src={IRamadhan} alt="" />
                        <p>Paket Religi</p>
                    </div>
                    <div className="card-layanan">
                        <img src={IBedroom} alt="" />
                        <p>Pemesanan Penginapan</p>
                    </div>
                    <div className="card-layanan">
                        <img src={IMosque} alt="" />
                        <p>Pemahaman Objek Religi</p>
                    </div>
                    <div className="card-layanan">
                        <img src={IView} alt="" />
                        <p>Tadabbur Alam</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;