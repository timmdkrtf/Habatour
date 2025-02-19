import Navbar from '../components/Navigation'
import Home from '../components/Home'
import About from '../components/About'
import Service from '../components/Service'
import Offer from '../components/Offer'
import Trip from '../components/Trip'
import Clients from '../components/Clients'
import Footer from "../components/Footer"

export default function Landing(){
    return(
        <div>
            <Navbar />
            <Home />
            <About />
            <Service />
            <Offer />
            <Trip />
            <Clients />
            <Footer />
        </div>
    );
}