import FlyerZiarahWali from "../assets/img/flyer/Ziarah Wali Garut.png"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Offer(){

    const [showFlyer, setShowFlyer] = useState(false);

    const handleCloseFlyer = () => setShowFlyer(false);
    const handleShowFlyer = () => setShowFlyer(true);

    return(
        <>
        <Modal show={showFlyer} onHide={handleCloseFlyer}>
            <Modal.Header closeButton>
            <Modal.Title>Ziarah Tuan Guru</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <img src={FlyerZiarahWali} alt="" loading="lazy" />
                    <div className="text-image">
                        <small>Kuota Terbatas</small>
                        <h2>Paket Ziarah Wali Garut</h2>
                        <p>Lakukan perjalanan ziarah wali di bumi pasundan, Garut, bareng Ust. Hisyam dan Ust. Irfan. Hanya dengan Rp550.000,00 saja, anda bisa dapat diberikan fasilitas premium yang akan membuat pengalaman ibadah Anda menenangkan, penuh berkah, dan meningkatkan rasa syukur kepada Allah Swt. </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseFlyer}>
                Tutup
            </Button>
            </Modal.Footer>
        </Modal>

        <div className="offer" id="offer">
            <div className="shape-container">
                <div className="shape1"></div>
                <div className="shape2"></div>
            </div>
            <div className="title">
                <h3>Penawaran Kami</h3>
            </div>
            <div className="container">
                <div className="content">
                    <div className="popular-offer">
                        <div className="card-offer">
                            <div className="image-container">
                                <img src={FlyerZiarahWali} alt="" loading="lazy" />
                                <div className="overlay">
                                    <div className="text-offer">
                                        <small>Kuota Terbatas</small>
                                        <h2>Paket Ziarah Wali Garut</h2>
                                        <p>Hanya Rp550.000</p>
                                        <div className="d-flex">
                                            <Button onClick={handleShowFlyer}>Lihat detail</Button>
                                            <a href="https://api.whatsapp.com/send?phone=6283811012385&text=permisi,%20saya%20ingin%20memesan%20Paket%20Ziarah%20Wali%20Garut" style={{color:"white", textDecoration:"none"}} target="_blank">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="blank" style={{padding:"100px 0", margin:"0 auto 100px auto", textAlign:"center"}}>
                        <h3>Coming Soon</h3>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    );
}

export default Offer;
