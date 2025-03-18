import FlyerZiarahWali from "../assets/img/flyer/Ziarah Wali dan Keindahan Alam Jawa.png"

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
                    <img src={FlyerZiarahWali} alt="" />
                    <div className="text-image">
                        <small>Kuota Terbatas</small>
                        <h2>Paket Ziarah Wali dan Keindahan Alam Jawa</h2>
                        <p>Lakukan perjalanan ziarah sekaligus tadabbur alam dengan penuh makna, bareng Ust. Hisyam dan Ust. Rizki. Hanya dengan Rp. 1.550.000,00 juta saja, anda bisa dapat diberikan fasilitas premium yang akan membuat pengalaman ibadah Anda menenangkan, penuh berkah, dan meningkatkan rasa syukur kepada Allah Swt. </p>
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
                                <img src={FlyerZiarahWali} alt="" />
                                <div className="overlay">
                                    <div className="text-offer">
                                        <small>Kuota Terbatas</small>
                                        <h2>Paket Ziarah Wali dan Keindahan Alam Jawa</h2>
                                        <p>Hanya Rp. 1.550.000</p>
                                        <div className="d-flex">
                                            <Button onClick={handleShowFlyer}>Lihat detail</Button>
                                            <a href="https://api.whatsapp.com/send?phone=6283811012385&text=permisi,%20saya%20ingin%20memesan%20Paket%20Ziarah%20Kalimantan" style={{color:"white", textDecoration:"none"}} target="_blank">Contact Us</a>
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
