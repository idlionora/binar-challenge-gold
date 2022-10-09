import '../App.css';
import './Footer.css';
import { Link } from "react-router-dom";
import iconFacebook from "../assets/icon_facebook.png";
import iconInstagram from "../assets/icon_instagram.png";
import iconTwitter from "../assets/icon_twitter.png";
import iconMail from "../assets/icon_mail.png";
import iconTwitch from "../assets/icon_twitch.png";

export const FooterComp = () => {
    return (
        <footer id="footer">
            <div className="address">
                <p>Jalan Suroyo No. 161 Mayangan Kota&nbsp;Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="footer-link_container">
                <p><Link to="/#our_services" className="footer-link">Our Service</Link></p>
                <p><a href="/#why_us" className="footer-link">Why Us</a></p>
                <p><a href="/#testimonial" className="footer-link">Testimonial</a></p>
                <p><a href="/#faq" className="footer-link">FAQ</a></p>                
            </div>
            <div className="connect">
                <p>Connect with us</p>
                <div className="connect-link_container flex">
                    <a href="#" target="_blank">
                    <img src={iconFacebook} alt="Facebook" className="connect-link"/>
                    </a>
                    <a href="#" target="_blank">
                    <img src={iconInstagram} alt="Instagram" className="connect-link"/>
                    </a>
                    <a href="#" target="_blank">
                    <img src={iconTwitter} alt="Twitter" className="connect-link"/>
                    </a>
                    <a href="#" target="_blank">
                    <img src={iconMail} alt="Mail" className="connect-link"/>
                    </a>
                    <a href="#" target="_blank">
                    <img src={iconTwitch} alt="Twitch" className="connect-link"/>
                    </a>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright Binar 2022</p>
                <div className="logo-img"></div>
            </div>
        </footer>
    )
}