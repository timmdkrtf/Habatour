import FlyerTravel from "../assets/img/flyer/1.png"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Offer(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Perjalanan Hati with Ust. Uki</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex">
                    <img src={FlyerTravel} alt="" />
                    <div className="text-image">
                        <small>Kuota Terbatas</small>
                        <h2>Paket Ziarah Banten</h2>
                        <p>Lakukan Perjalanan penuh makna ke Banten bareng Ust. Uki. Hanya dengan 850 rb saja, anda bisa dapat diberikan fasilitas premium yang akan membuat pengalaman ibadah Anda menenangkan, penuh berkah, dan meningkatkan rasa syukur kepada Allah Swt. </p>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
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
                                <img src={FlyerTravel} alt="" />
                                <div className="overlay">
                                    <div className="text-offer">
                                        <small>Kuota Terbatas</small>
                                        <h2>Paket Ziarah Banten</h2>
                                        <p>Lakukan Perjalanan penuh makna ke Banten bareng Ust. Uki. Hanya 850 rb saja...</p>
                                        <div className="d-flex">
                                            <Button onClick={handleShow}>Lihat detail</Button>
                                            <a href="https://api.whatsapp.com/send?phone=6281213779357" style={{color:"white", textDecoration:"none"}} target="_blank">Contact Us</a>
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
