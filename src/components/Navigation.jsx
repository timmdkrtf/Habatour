import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import FavHabaTour from '../assets/img/1. Habatour Logo Utama (P).png'

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-body-tertiary w-100">
      <Container>
        <Navbar.Brand href="#"><img src={FavHabaTour} style={{width:"100px", marginTop:"-7px"}} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Beranda</Nav.Link>
            <Nav.Link href="#about">Tentang Kami</Nav.Link>
            <Nav.Link href="#service">Layanan</Nav.Link>
            <Nav.Link href="#offer">Penawaran</Nav.Link>
            <Nav.Link href="#contact">Kontak</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;