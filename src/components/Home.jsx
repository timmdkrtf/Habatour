import { useState, useEffect } from "react";

import view1 from "../assets/img/MDK01340.jpg"
import view2 from "../assets/img/MDK01541.jpg"
import view3 from "../assets/img/MDK09126.jpg"
import view4 from "../assets/img/MDK09166.jpg"
const images = [view3, view4, view1, view2];

export default function Home(){

    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true); 
            setTimeout(() => {
                setCurrentImage((prev) => (prev + 1) % images.length);
                setFade(false);
            }, 300); 
        }, 6000); 

        return () => clearInterval(interval);
    }, []);

    return(
    <div id="home" className="home">
      {/* Background Image Layer */}
      <img
        src={images[currentImage]}
        alt="background"
        className={`background-image ${fade ? "fade-out" : "fade-in"}`}
      />

      {/* Overlay */}
      <div className="overlay" />

      {/* Content */}
            <div className="container">
                <div className="row">
                    <div className="content">
                        <h1>
                            Jelajahi Wisata dengan Sentuhan Keindahan Islami
                        </h1>
                            <a className="btn explore" href="#about">Jelajahi Sekarang</a>
                    </div>
                </div>
            </div>
        </div>
    );
}