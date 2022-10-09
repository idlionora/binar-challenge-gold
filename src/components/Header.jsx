import {useState} from "react";
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import './Header.css';

const HamburgerMenuComp = () => {
    //to change burger classes
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const [hamburgerClass, setHamburgerClass] = useState("");
    const [overlayClass, setOverlayClass] = useState("");
    const [popMenu, setPopMenu] = useState("");

    //toggle burger menu change
    const handleMenu = () => {
        if(!isMenuClicked) {
            setHamburgerClass("position-fixed open"); 
            setOverlayClass("display-block open");
            setPopMenu("display-flex");
            setTimeout(() => {
                setPopMenu("display-flex open")
            }, 10);            
        } else {
            setHamburgerClass("position-fixed");
            setOverlayClass("display-block");
            setPopMenu("display-flex");
            setTimeout(() => {
                setOverlayClass("")
            }, 310);
            setTimeout(() => {
                setHamburgerClass("");
                setPopMenu("")
            }, 500);
        }
        setIsMenuClicked(!isMenuClicked);        
    }
    return (
        <>
        <div className={`hamburger hide-for-desktop ${hamburgerClass}`}
        onClick={handleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className={`overlay hide-for-desktop ${overlayClass}`}
        onClick={handleMenu}></div>
        <div className={`pop-menu flex-column hide-for-desktop ${popMenu}`}
        onClick={handleMenu}>
            <p className="pop-menu_title">BCR</p>
            <Link to="/#our_services" className="pop-link">Our Services</Link>
            <a href="/#why_us" className="pop-link">Why Us</a>
            <a href="/#testimonial" className="pop-link">Testimonial</a>
            <a href="/#faq" className="pop-link">FAQ</a>
        </div>      
        </>
    )
}

export const NavbarComp = () => {
    return (
        <> 
        <HamburgerMenuComp />
        <nav className="site-nav flex">
            <Link to="#" className="logo-link">
                <div className="logo-img" title="Binar Car Rental"></div>
            </Link>
            <ul className="nav-container flex hide-for-mobile">
                <li><Link to="/#our_services" className="nav-link">Our Services</Link></li>
                <li><a href="/#why_us" className="nav-link">Why Us</a></li>
                <li><a href="/#testimonial" className="nav-link">Testimonial</a></li>
                <li><a href="/#faq" className="nav-link">FAQ</a></li>                
            </ul>
        </nav>  
        </>
    )
}

export const BannerComp = (props) => {
    const navigate = useNavigate();
    return (
        <div className="banner grid">
            <div className={`banner-text ${props.noButton && "search-page-pb"}`}>
                <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                <Button className={`mulai-sewa green-button ${props.noButton && "no-button"}`} 
                onClick={() => {navigate("/cari-mobil")}}>Mulai Sewa Mobil</Button>
            </div>
            <div className="banner-pic">
                <div className="blue-block">
                    <div className={`car-pic_space ${props.noButton && "search-page-pb"}`}></div>
                    <div className="car-pic_container">
                        <div className="blue-curve"></div>
                        <img src={require("../assets/Mercedes Car EQC 300kW Edition - 900x598.png")} alt="Mercedes Car" id="banner-car" />
                    </div>
                </div>
            </div>
        </div>
    )
}
