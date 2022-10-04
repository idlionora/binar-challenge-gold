import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { BannerComp, NavbarComp } from '../components/Header';
import { FooterComp } from '../components/Footer';
import { LandingPageComp } from '../components/LandingPageContent';

const Home = () => {
    return (
        <>
        <header>
            <NavbarComp/>
            <BannerComp/>
        </header>
        <LandingPageComp/>
        <FooterComp/>
        </>
    )
}

export default Home;