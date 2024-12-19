import FlyerTravelJogja from "../assets/img/flyer/Flyer Ziarah Jogja Al Ihya.png"
import FlyerTravelKalimantan from "../assets/img/flyer/Flyer Ziarah Kalimantan Selatan.png"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Offer(){

    const [showKalimantan, setShowKalimantan] = useState(false);
    const [showJogja, setShowJogja] = useState(false);

    const handleCloseKalimantan = () => setShowKalimantan(false);
    const handleCloseJogja = () => setShowJogja(false);
    const handleShowKalimantan = () => setShowKalimantan(true);
    const handleShowJogja = () => setShowJogja(true);

    return(
        <>
        <Modal show={showKalimantan} onHide={handleCloseKalimantan}>
            <Modal.Header closeButton>
            <Modal.Title>Ziarah Tuan Guru</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <img src={FlyerTravelKalimantan} alt="" />
                    <div className="text-image">
                        <small>Kuota Terbatas</small>
                        <h2>Paket Ziarah Kalimantan</h2>
                        <p>Lakukan perjalanan ziarah penuh makna ke Kalimantan Selatan bareng Ust. Jihad. Hanya dengan Rp. 6.499 juta saja, anda bisa dapat diberikan fasilitas premium yang akan membuat pengalaman ibadah Anda menenangkan, penuh berkah, dan meningkatkan rasa syukur kepada Allah Swt. </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseKalimantan}>
                Tutup
            </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showJogja} onHide={handleCloseJogja}>
            <Modal.Header closeButton>
            <Modal.Title>Ziarah Bil Barkah</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <img src={FlyerTravelJogja} alt="" />
                    <div className="text-image">
                        <small>Kuota Terbatas</small>
                        <h2>Paket Ziarah Jogja</h2>
                        <p>Lakukan perjalanan ziarah penuh makna ke Jogja bareng Ust. Kodir & Ust. Syaeful. Hanya dengan 1.3 juta saja, anda bisa dapat diberikan fasilitas premium yang akan membuat pengalaman ibadah Anda menenangkan, penuh berkah, dan meningkatkan rasa syukur kepada Allah Swt. </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseJogja}>
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
                                <img src={FlyerTravelKalimantan} alt="" />
                                <div className="overlay">
                                    <div className="text-offer">
                                        <small>Kuota Terbatas</small>
                                        <h2>Paket Ziarah Kalimantan</h2>
                                        <p>Lakukan perjalanan ziarah penuh makna, hanya dengan Rp. 6.499.000,00</p>
                                        <div className="d-flex">
                                            <Button onClick={handleShowKalimantan}>Lihat detail</Button>
                                            <a href="https://api.whatsapp.com/send?phone=6283811012385&text=permisi,%20saya%20ingin%20memesan%20Paket%20Ziarah%20Kalimantan" style={{color:"white", textDecoration:"none"}} target="_blank">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-offer">
                            <div className="image-container">
                                <img src={FlyerTravelJogja} alt="" />
                                <div className="overlay">
                                    <div className="text-offer">
                                        <small>Kuota Terbatas</small>
                                        <h2>Paket Ziarah Jogja</h2>
                                        <p>Lakukan perjalanan ziarah penuh makna, hanya dengan Rp. 1.300.000,00 saja</p>
                                        <div className="d-flex">
                                            <Button onClick={handleShowJogja}>Lihat detail</Button>
                                            <a href="https://api.whatsapp.com/send?phone=6283811012385&text=permisi,%20saya%20ingin%20memesan%20Paket%20Ziarah%20Jogja" style={{color:"white", textDecoration:"none"}} target="_blank">Contact Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Offer;
