import { FaTiktok } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import logoHabatour from "../assets/img/1. Habatour Logo Utama (P).png";
import { Container, Row, Col, Nav } from "react-bootstrap";

import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="contact" className="text-white py-4">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6} className="py-4">
            <img src={logoHabatour} className="w-25" alt="MDKRTF Logo" /><br />
            <small className="small">by PT Abdi Solusi Wisata</small>
            <div className="mt-3">
              <div className="" style={{padding: "5px 0"}}>
                <a href="https://maps.app.goo.gl/AuKKXobm43vU2ABf6" target="_blank" className="text-white text-decoration-none">Jl. Aria Surialaga No. 83, Kota Bogor 16119</a>
              </div>
              <div className="d-flex align-items-center " style={{padding: "5px 0"}}>
                <a href="tel:+622518632170" className="text-white text-decoration-none">
                  <BsFillTelephoneFill className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                  +62 251 8632 170
                </a>
              </div>
              <div className="d-flex align-items-center " style={{padding: "5px 0"}}>
                <a href="https://api.whatsapp.com/send?phone=6281213779357" className="text-white text-decoration-none">
                  <BsWhatsapp className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                  +62 812 1377 9357
                </a>
              </div>
              <div className="d-flex align-items-center" style={{padding: "5px 0"}}>
                <a href="mailto:contact@habatour.co.id" className="text-white text-decoration-none">
                  <BsFillEnvelopeFill className="fs-5" style={{ margin:"-2px 15px 0 0" }} />
                  contact@habatour.co.id
                </a>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end mb-3" style={{marginTop: "-7px"}}>
              <Nav.Link href="https://www.tiktok.com/@habatour.co.id" className="text-white fs-3 me-1" target="_blank">
                <FaTiktok />
              </Nav.Link>
              <Nav.Link href="https://instagram.com/habatour.co.id" className="text-white fs-3 me-1" target="_blank">
                <BsInstagram />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="">
            <hr />
            <p className="text-end">© 2025 PT Abdi Solusi Wisata &middot; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
