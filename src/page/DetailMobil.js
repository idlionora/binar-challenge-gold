import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { FooterComp } from '../components/Footer';
import { NavbarComp } from '../components/Header';

const CariMobilConfirmed = () => {
    return (
        <div>
            <h1>Detail Mobil</h1>
        </div>
    )
}

const DetailMobil = () => {
    return (
        <div className="one-screen-minimum">
            <header>
                <NavbarComp/>
            </header>
            <CariMobilConfirmed/>
            <FooterComp/>
        </div>
    )
}

export default DetailMobil;