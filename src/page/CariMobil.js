import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { BannerComp, NavbarComp } from '../components/Header';
import { FooterComp } from '../components/Footer';


const CariMobilComp = () => {
    return (
        <div>
            <h1>Cari Mobil Testing</h1>
        </div>
    )
}

const CariMobil = () => {
    return (
      <div className="one-screen-minimum">
        <header>
            <NavbarComp/>
            <BannerComp noButton/>
        </header>
        <CariMobilComp/>
        <FooterComp/>
      </div>
    )
  }

  export default CariMobil;