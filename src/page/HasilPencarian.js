import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { FooterComp } from '../components/Footer';
import { NavbarComp } from '../components/Header';

const HasilPencarianComp = () => {
    return (
        <div>
            <h2>Hasil Pencarian</h2>
        </div>
    )
}

const CariMobilConfirm = () => {
    return (
        <div>
            <h1>Hasil Pencarian</h1>
        </div>
    )
}

const HasilPencarian = () => {
    return (
        <div className="one-screen-minimum">
            <header>
                <NavbarComp/>
            </header>
            <CariMobilConfirm/>
            <div className="hasil-pencarian_container">
                <HasilPencarianComp/>
            </div>
            <FooterComp/>
        </div>
    )
}

export default HasilPencarian;